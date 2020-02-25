import React from "react";
// props의 타입을 체크해주는 라이브러리
// 이름은 반드시 propTypes로 작성, 그래야 리액트가 확인을 할 수 있음
import PropTypes from "prop-types";

function Food({ name, desc, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/10</h4>
      <h2>this is {desc}</h2>
    </div>
  );
}

// props 타입 검사
// PropTypes.자료형 으로 작성, isRequired는 필수 속성에 부여
Food.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  { id: 1, name: "kimchi", desc: "hot", rating: 5 },
  { id: 2, name: "ramen", desc: "hooooot", rating: 6 },
  { id: 3, name: "samgiopsal", desc: "hmm", rating: 10 },
  { id: 4, name: "chukumi", desc: "spicy", rating: 9 }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          desc={dish.desc}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
