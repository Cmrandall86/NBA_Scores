import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

import { Link } from "react-router-dom";
import { whoWon, Score } from "./ui/CheckWinner";
import ATL from "../assets/logos/atl";
import BKN from "../assets/logos/bkn";
import BOS from "../assets/logos/bos";
import CHA from "../assets/logos/cha";
import CHI from "../assets/logos/chi";
import CLE from "../assets/logos/cle";
import DAL from "../assets/logos/dal";
import DEN from "../assets/logos/den";
import DET from "../assets/logos/det";
import GSW from "../assets/logos/gsw";
import HOU from "../assets/logos/hou";
import IND from "../assets/logos/ind";
import LAC from "../assets/logos/lac";
import LAL from "../assets/logos/lal";
import MEM from "../assets/logos/mem";
import MIA from "../assets/logos/mia";
import MIL from "../assets/logos/mil";
import MIN from "../assets/logos/min";
import NOP from "../assets/logos/nop";
import NYK from "../assets/logos/nyk";
import OKC from "../assets/logos/okc";
import ORL from "../assets/logos/orl";
import PHI from "../assets/logos/phi";
import PHX from "../assets/logos/phx";
import POR from "../assets/logos/por";
import SAC from "../assets/logos/sac";
import SAS from "../assets/logos/sas";
import TOR from "../assets/logos/tor";
import UTA from "../assets/logos/uta";
import WAS from "../assets/logos/was";

const NBAIcons = {
  ATL,
  BKN,
  BOS,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
};

export default function ScoreDisplayer({ games, loading }) {
  const inProgress = ["1st Qtr", "2nd Qtr", "Halftime", "3rd Qtr", "4th Qtr"];
  return (
    <>
    {loading ? (
      <div><CircularProgress /></div>
    ) : (
        <div className="scoreboard">
        <div>
          {games.length === 0 && <h2 className="title">No Games Today</h2>}
          {games.some((game) => game.status !== inProgress.includes(game.status)) && games.some((game) => game.status !== "Final") && (
            <h2 className="title">Upcoming</h2>
          )}
          <div className="flex flex-wrap gap-5">
            {games.map((game, i) => {
              {
                if (!inProgress.includes(game.status) && game.status !== "Final") {
                  return <GameResult game={game} key={i} />;
                }
              }
            })}
          </div>
          {games.some((game) => inProgress.includes(game.status)) && <h2 className="title">In Progress</h2>}
          <div className="flex flex-wrap gap-5">
            {games.map((game) => {
              {
                if (inProgress.includes(game.status)) {
                  return <GameResult game={game} />;
                }
              }
            })}
          </div>
          {games.some((game) => game.status === "Final") && <h2 className="title">Final</h2>}

          <div className="flex flex-wrap gap-5">
            {games.map((game) => {
              {
                if (game.status === "Final") {
                  return <GameResult game={game} />;
                }
              }
            })}
          </div>
        </div>
    </div>
      )}
    </>
  );
}

const GameResult = ({ game }) => {
  const winner = whoWon(game.home_team_score, game.visitor_team_score, game.status);
  const HomeTeamIcon = NBAIcons[game.home_team.abbreviation];
  const VisitorTeamIcon = NBAIcons[game.visitor_team.abbreviation];

  return (
    <div className="gameContainer">
      <div className="flex justify-end mb-1">
        <FormatGameStatus status={game.status} />
      </div>
      <div className={`teamAndScore ${winner === "visitor" ? "text-slate-300" : ""}`}>
        <div className="flex">
          <div className="mr-2">
            <HomeTeamIcon size={"50px"} />
          </div>
          <div className="teamContainer">
            <Link to={`teams/${game.home_team.id}`}>{game.home_team.city}</Link>
            <span className="text-xs mb-2">{game.home_team.name}</span>
          </div>
        </div>
        <Score score={game.home_team_score} />
      </div>
      <div className={`teamAndScore ${winner === "home" ? "text-slate-300" : ""}`}>
        <div className="flex">
          <div className="mr-2">
            <VisitorTeamIcon size={"50px"} />
          </div>
          <div className="teamContainer">
            <Link to={`teams/${game.visitor_team.id}`}>{game.visitor_team.city}</Link>
            <span className="text-xs mb-2">{game.visitor_team.name}</span>
          </div>
        </div>
        <Score score={game.visitor_team_score} />
      </div>
    </div>
  );
};

function FormatGameStatus({ status }) {
  if (status === "Final" || status === "1st Qtr" || status === "2nd Qtr" || status === "Halftime" || status === "3rd Qtr" || status === "4th Qtr") {
    return (
      <div className="flex justify-end">
        <span className="gameTime">{status}</span>
      </div>
    );
  } else {
    const date = new Date(status);
    const options = {
      timeZone: "America/Denver",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedValue = formatter.format(date);
    return <span className="gameTime">{formattedValue}</span>;
  }
}
