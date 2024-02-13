import "./Button.css";

// For alert button
export default function Button() {
  return (
    <button
      onClick={() => {
        alert("Sorry, Link not yet working. Try again soon!");
      }}
    >
      Alert button!
    </button>
  );
}
