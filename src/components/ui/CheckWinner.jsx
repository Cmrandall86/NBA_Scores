import React from "react";

export function whoWon(homeScore, visitorScore, gameStatus) {
  if (gameStatus !== "Final") return;

  if (homeScore > visitorScore) return "home";

  return "visitor";
}

export function Score({ score, hasWon }) {
  if (hasWon) {
    return <span className="bg-blue-200">{score}</span>;
  }

  return <span>{score}</span>;
}
