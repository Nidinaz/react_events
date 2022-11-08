import "./App.css";
import axios from "axios";

function App() {
  axios
  //axios-method 
  //get functions gets one parameter the URL with all its differnt parts: Domain, Path, Key and Values
    .get(
      //"https://api.weatherapi.com/v1/search.json?key=55002895a5484b73bae191557220711&q=Amstelveen"
      'http://api.weatherapi.com/v1/sports.json?key=55002895a5484b73bae191557220711&q=Amsterdam'
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log("Error: " + e);
    });

  return <div></div>;
}

export default App;
