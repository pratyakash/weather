import React, { Component } from 'react';
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

const API_Key="573d19ee4174835f0d5e19bc9579da14";

class App extends Component {

  state={
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    cod: undefined
  }
  
  getWeather= async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}&units=metric`);
    const data = await api_call.json();
    const cod=data.cod;

      if(cod===200){
        console.log(data);
        this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });

      }

      else{
          this.setState({
            temprature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Unable to Find the Data"
          });
      }
    
  }

  render() {
    return (
      <div>
       <Titles />
       <Form getWeather={this.getWeather} />
      <br></br>
       <Weather 
        temprature={this.state.temprature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humididty}
        description={this.state.description}
        error={this.state.error} 
        /> 
      </div>
    );
  }
}

export default App;
