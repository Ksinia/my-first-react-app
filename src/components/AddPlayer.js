import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AddPlayer.css";

export default class AddPlayer extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };
  initialState = { name: "" };
  state = this.initialState;

  handleSubmit = event => {
    event.preventDefault();

    this.props.addPlayer(this.state.name);
    this.setState(this.initialState);
  };

  handleChange = event => {
    //event is any change in the input field of the form
    this.setState({
      [event.target.name]: event.target.value // why not just name: event.target.value
    });
  };

  render() {
    console.log("render of addplayer ", this.state);
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
