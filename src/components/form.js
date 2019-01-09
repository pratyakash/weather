import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getweather}>
                <input type="text" name="City" placeholder="Enter the City" />
                <br />
                <br />
                <input type="text" name="Country" placeholder="Enter the Country" />
                <br />
                <br />
                <button>Weather Reports</button>
            </form>
        );
    }
}

export default Form;