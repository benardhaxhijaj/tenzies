import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ConfettiExplosion from "react-confetti-explosion";

export default function App() {
  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  };

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
    return () => {}; // cleanup function
  });

  const allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  };

  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      handleClick={() => handleClicks(die.id)}
    />
  ));

  const rollBtn = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        if (!die.isHeld) {
          return generateNewDie();
        }
        return die;
      })
    );
  };

  const rollOrNewGame = () => {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      rollBtn();
    }
  };

  const handleClicks = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {tenzies && <ConfettiExplosion />}
      <div className="dice-container">{diceElements}</div>
      <button className="rollingBtn" onClick={rollOrNewGame}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
