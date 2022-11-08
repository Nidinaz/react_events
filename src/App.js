import "./App.css";
import axios from "axios";

function App() {
  axios
    .get(
      "https://api.weatherapi.com/v1/search.json?key=55002895a5484b73bae191557220711&q=Utrecht"
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
