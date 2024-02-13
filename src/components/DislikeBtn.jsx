import { useState } from "react";
import "./LikeBtn.css";

export default function useStateToDislike() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count - 1);
  }

  return (
    <div className="dislike-container">
      <p className="count-display">Dislikes: {count}</p>
      <button onClick={handleClick} className="dislike-button">
        👎
      </button>
    </div>
  );
}
