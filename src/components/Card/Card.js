import axios from "axios";
import React ,{useState}from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useQuery } from "react-query";

import "./Card.css";
function Card() {
  const [weatherdata,setWeatherData]=useState( )
  
  const weatherhandler = () => {
    const API_KEY="d13bb849445a57ea9b1a8f3f3c217a7f"
    return (axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherdata}&appid=${API_KEY}&units=metric`
      )
      )};
      const { data, refetch } = useQuery("weather", weatherhandler, {
        enabled: false
      });
  console.log(data)
  return (
    <>
      <div className="cardContiner">
        <div className="searchBar">
          <InputGroup className="mb-3">
            <Button type="submit" onClick={refetch} variant="outline-success" id="button-addon1">
              @!
            </Button>
            <Form.Control
            onChange={(e)=>setWeatherData(e.target.value)}
              value={weatherdata}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              palaceholder="find...."
            />
          </InputGroup>
        </div>
        <div className="mainContainer">
          <div className="card">
           
            <h1> {  data?.data?.name ?   `${ data?.data?.name}`  :"search....." }</h1>
            <h1> {   data?.data?.main?.temp ?  `${ Math.round(data?.data?.main?.temp)}`:" oops..."}&deg;C  </h1>
            <h4>{data?.data?.weather[0]?.main} </h4>
            <h6>{data?.data?.weather[0]?.description}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
