import { useState } from "react";
import "./UseState.css";

export default function useStateToCount(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="vote-count-container">
      <p className="count-display">Count: {count}</p>
      <button onClick={handleClick} className="vote-button">
        {props.voteTreeName}
      </button>
    </div>
  );
}
