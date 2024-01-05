import React from "react";
import Die from "./Die";

export default function App() {
  const allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceArray;
  };
  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die, index) => (
    <Die value={die} key={index} />
  ));

  const rollBtn = () => {
    setDice(allNewDice());
  };

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="rollingBtn" onClick={rollBtn}>
        Roll Dice
      </button>
    </main>
  );
}
