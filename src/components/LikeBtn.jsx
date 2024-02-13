import { useState } from "react";
import "./LikeBtn.css";

export default function useStateToLike() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="like-container">
      <p className="count-display">Likes: {count}</p>
      <button onClick={handleClick} className="like-button">
        👍
      </button>
    </div>
  );
}
