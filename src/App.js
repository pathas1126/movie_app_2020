import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  { name: "kimchi", desc: "hot" },
  { name: "ramen", desc: "hooooot" },
  { name: "samgiopsal", desc: "hmm" },
  { name: "chukumi", desc: "spicy" }
];

function App() {
  return (
    <div>
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
