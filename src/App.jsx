// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import TreeCard from "./components/TreeCard";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <TreeCard
        treeName="Bonsai"
        location="Japan"
        imgLink="https://www.thespruce.com/thmb/3yJsa8FTf-44B9jvwcewht4sonA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Pine-Tree-46265373c5e24989b99bfc3e78fe880f.jpg"
      />
      <TreeCard
        treeName="Weeping Willow"
        location="UK"
        imgLink="https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Weeping_Willow_11_FGT_1024x1024.jpg?v=1585244238"
      />
      <TreeCard
        treeName="Japanese Cherry Blossom"
        location="Japan"
        imgLink="https://2.bp.blogspot.com/-FQEB46bmYr4/U1-PittYyHI/AAAAAAAACEc/lRcHWHqeM3U/s1600/japan-landscape-cherry-blossom-5645.jpg"
      />
    </div>
  );
}
