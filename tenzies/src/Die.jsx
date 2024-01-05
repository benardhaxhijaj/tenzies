const Die = ({ value, isHeld, handleClick }) => {
  const dieClass = isHeld ? "green-face" : "";
  return (
    <div className={`die-face ${dieClass}`} onClick={handleClick}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

export default Die;
