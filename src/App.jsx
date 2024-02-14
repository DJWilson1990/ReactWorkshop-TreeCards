// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import TreeCard from "./components/TreeCard";
import Header from "./components/Header";
import UseState from "./components/UseState";
import VoteHeader from "./components/VoteHeader";
import RenderBtn from "./components/RenderBtn";
import { interestingTrees } from "./components/MoreTrees";

export default function App() {
  return (
    <div>
      <Header />
      <RenderBtn />
      <TreeCard
        treeName="Bonsai"
        location="Japan"
        imgLink="https://www.thespruce.com/thmb/3yJsa8FTf-44B9jvwcewht4sonA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Pine-Tree-46265373c5e24989b99bfc3e78fe880f.jpg"
        info="Bonsai is the art of growing dwarf trees and shrubs from seedlings or rooted cuttings. It requires careful training, pruning and container restriction – the latter giving bonsai its name as it translates as 'tray cultivation'. This is a fun and beautiful way of cultivating plants on a miniature scale."
        href="https://en.wikipedia.org/wiki/Bonsai"
      />
      <TreeCard
        treeName="Weeping Willow"
        location="China"
        imgLink="https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Weeping_Willow_11_FGT_1024x1024.jpg?v=1585244238"
        info="Weeping willow trees, which are native to northern China, are beautiful and fascinating trees whose lush, curved form is instantly recognizable. Found throughout North America, Europe, and Asia, these trees have unique physical characteristics and practical applications as well as a well-established place in culture, literature, and spirituality throughout the world."
        href="https://en.wikipedia.org/wiki/Salix_babylonica#Horticultural_selections_and_related_hybrids"
      />
      <TreeCard
        treeName="Japanese Cherry Blossom"
        location="Japan"
        imgLink="https://2.bp.blogspot.com/-FQEB46bmYr4/U1-PittYyHI/AAAAAAAACEc/lRcHWHqeM3U/s1600/japan-landscape-cherry-blossom-5645.jpg"
        info="Arguably no country celebrates the cherry blossom with the excitement of Japan, but the country is hardly the only place on earth with a large assortment of these flowers. Hanami is also celebrated to a lesser extent in China, Korea, and Taiwan. Smaller celebrations can be enjoyed throughout the U.S. and Europe."
        href="https://en.wikipedia.org/wiki/Cherry_blossom"
      />
      <VoteHeader />
      <UseState voteTreeName="Bonsai" />
      <UseState voteTreeName="Weeping Willow" />
      <UseState voteTreeName="Japanese Cherry Blossom" />
      <h1>
        Below trees are listed using .map to display an array of items created
        in MoreTrees.js
      </h1>
      {/* using .map by creating an array of trees in MoreTrees.js */}
      <div className="more-trees-container">
        {interestingTrees.map((tree) => (
          <TreeCard
            key={tree.id}
            treeName={tree.name}
            location={tree.location}
            imgLink={tree.imgLink}
            info={tree.info}
            href={tree.href}
          />
        ))}
      </div>
    </div>
  );
}
