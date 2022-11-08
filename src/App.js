import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = () => {
  // useState is a hook, but hooks are a lot more than useState. i.e. useContext.....
  const [response, setResponse] = useState();


  // initially response is null, so it's faulty (meaning it equals false), so, !false => true and this get's triggered
  if (!response) {
    axios
    //axios-method
    //get functions gets one parameter the URL with all its differnt parts: Domain, Path, Key and Values
    .get(
      //"https://api.weatherapi.com/v1/search.json?key=55002895a5484b73bae191557220711&q=Amstelveen"
      "http://api.weatherapi.com/v1/sports.json?key=55002895a5484b73bae191557220711&q=Amsterdam"
    )
    .then((response) => {
      console.log(response.data);
      setResponse(response.data);
    })
    .catch((e) => {
      console.log("Error: " + e);
    });
  }

  const {football} = response

  const footballComps = football.map((footballMatch) => {
    return <div>{footballMatch.match}</div>
  })

  return <div>{footballComps}</div>;
}

export default App;
