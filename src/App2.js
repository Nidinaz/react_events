import "./App.css";
import axios from "axios";
import { useState } from "react";

const App2 = () => {
  const [response, setResponse] = useState();

  return (
    <div>
      {response}
      <button
        onClick={() => {
          //changing components depending on interaction
          setResponse(<FootballMatches city={"Amsterdam"}></FootballMatches>);
        }}
      >
        Amsterdam!
      </button>
      <button
        onClick={() => {
          //changing components depending on interaction
          setResponse(<FootballMatches city={"Utrecht"}></FootballMatches>);
        }}
      >
        Utrecht!
      </button>
    </div>
  );
};

const Header = (props) => {
  return <div>{props.city}</div>;
};

const FootballMatches = (props) => {
  const [Matches, setMatches] = useState();
  if (!Matches) {
    axios
      //axios-method
      //get functions gets one parameter the URL with all its differnt parts: Domain, Path, Key and Values
      .get(
        //"https://api.weatherapi.com/v1/search.json?key=55002895a5484b73bae191557220711&q=Amstelveen"
        "http://api.weatherapi.com/v1/sports.json?key=55002895a5484b73bae191557220711&q="+props.city
      )
      .then((response) => {
        console.log(response.data);
        const footballComps = response.data.football.map((match) => {
          return <div>{match.match}</div>;
        });
        setMatches(footballComps);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  }

  return (<div>{Matches}</div>)
};
export default App2;
