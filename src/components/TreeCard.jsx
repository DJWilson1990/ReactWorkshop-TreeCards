import "./TreeCardCSS.css";

export default function TreeCard(props) {
  return (
    <div className="tree-card-container">
      <h1 className="tree-header">{props.treeName}</h1>
      <img className="tree-image" src={props.imgLink} alt="" />
      <p className="tree-location">{props.location}</p>
    </div>
  );
}

// Another way to write props: Destructured!
// export default function TreeCard({treeName, imgLink, location}) {
//     return (
//         <div>
//             <h1>{treeName}</h1>
//             <img src={imgLink} alt=""/>
//             <p>{location}</p>
//         </div>
//     )
// }
