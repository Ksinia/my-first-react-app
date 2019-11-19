import React, { Component } from "react";

class Animals extends Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  };

  render() {
    return (
      <div>
        <ul>
          Animals By Awesomeness:
          {this.state.animalsByAwesomeness.map((animal, index) => {
            return (
              <li key={index}>
                Level {index + 1}: {animal}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Animals;
