import React, { Component } from 'react';
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

const API_Key="573d19ee4174835f0d5e19bc9579da14";

class App extends Component {
  
  getWeather= async (e)=>{
    e.preventDefault();
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&id=524901&APPID=573d19ee4174835f0d5e19bc9579da14&units=metric`);
    const data= await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
       <Titles />
       <Form getWeather={this.getWeather} />
       <Weather />
      </div>
    );
  }
}

export default App;
