import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  };

  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      handleClick={() => handleClick(die.id)}
    />
  ));

  const rollBtn = () => {
    setDice(allNewDice());
  };

  const handleClick = (id) => {
    console.log(id);
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
