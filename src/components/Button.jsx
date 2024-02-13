import "./Button.css";

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("You clicked me!");
      }}
    >
      Click for more info
    </button>
  );
}
