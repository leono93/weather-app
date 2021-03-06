import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity level: {this.props.humidity}% </p>}
        {this.props.description && (
          <p>Weather conditions: {this.props.description}</p>
        )}
      </div>
    );
  }
}

export default Weather;
