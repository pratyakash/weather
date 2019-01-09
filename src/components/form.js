import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Enter the City" />
                <br />
                <br />
                <input type="text" name="country" placeholder="Enter the Country" />
                <br />
                <br />
                <button>Weather Reports</button>
            </form>
        );
    }
}

export default Form;