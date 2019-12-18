import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false
    };
  }

  roll = () => {
    const { sides } = this.props;
    const newDice1 = sides[Math.floor(Math.random() * sides.length)];
    const newDice2 = sides[Math.floor(Math.random() * sides.length)];
    this.setState({ die1: newDice1, die2: newDice2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    const { die1, die2, rolling } = this.state;
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button onClick={this.roll} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
export default RollDice;
