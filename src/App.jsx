import  { useState } from "react";
import "./App.css";
import "../app/globals.css";
import useFetchNBAData from "./components/useFetchNBAData";
import ScoreDisplayer from "./components/ScoreDisplayer";
import { formatDate } from "./lib/helper-functions";
import Header from "./components/ui/Header";
import Date_Picker from "./components/ui/DatePicker";

function App() {
  const [gameDay, setGameDay] = useState(new Date());
  const formattedGameDay = formatDate(gameDay);
  const { data } = useFetchNBAData(formattedGameDay);
  return (
    <>
    <div className="flex justify-center w-screen border-green-700">
      <div className="max-w-screen-lg">
      <div className="flex justify-between items-center m-3 mb-5 border-b-2 ">
        <Header />
        <Date_Picker setGameDay={setGameDay} gameDay={gameDay} />
        
      </div>
      <div className="flex items-center justify-center flex-col gap-10">
        <ScoreDisplayer games={data} />
      </div>

      </div>

    </div>
    </>
  );
}

export default App;
