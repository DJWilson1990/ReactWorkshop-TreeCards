import { useState } from "react";
import "./Button.css";

export default function RenderBtn() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="render-button-container">
      <button className="render-btn" onClick={() => setIsVisible(!isVisible)}>
        Press Here for Welcome Suprise
      </button>
      {isVisible && <p>Hello! Welcome to a page about 3 trees!</p>}
    </div>
  );
}

// Use the ternary operator to conditionally render the message.

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   return <div>{isVisible ? <p>Hello World</p> : null}</div>;
// };
