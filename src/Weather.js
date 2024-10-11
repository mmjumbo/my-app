import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {

    function handleresponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
    }
    let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleresponse);
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="yellow"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
}