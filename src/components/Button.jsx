import "./Button.css";

// export default function Button(props) {
//   return (
//     <a href={props.href}>
//       <button>Click for more info!</button>
//     </a>
//   );
// }

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
