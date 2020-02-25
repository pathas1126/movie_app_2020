import React, { Component } from "react";
// props의 타입을 체크해주는 라이브러리
// 이름은 반드시 propTypes로 작성, 그래야 리액트가 확인을 할 수 있음
import PropTypes from "prop-types";

class App extends Component {
  // 자바스크립트 class 문법에 따른 생성자
  // 리액트에 종속된 문법이 아님
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // 변경될 여지가 있는 데이터를 state로 관리함
  state = {
    count: 0
  };
  add = count => {
    console.log("add");
    // setState 내부에 current를 매개변수로 사용하는 함수 작성 가능
    // 외부 state에 의존하지 않는 가장 좋은 방법
    // 현재 state에서 새로운 state를 얻어내서 작업(불변성과 관련된 듯)
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    // setState함수가 호출될 때마다 새로운 state와 함께
    // render() 함수가 호출됨
    this.setState(current => ({ count: current.count - 1 }));
  };

  // 컴포넌트가 처음 생성되었을 때만 호출되는 함수
  // API연결에 주로 사용
  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I did Update");
  }

  componentWillUnmount() {
    console.log("Good bye, cruel world");
  }

  render() {
    console.log("I'm rendering");

    // state가 컴포넌트 내부에 있기 때문에 this.state로 작성
    const { count } = this.state;

    return (
      <div>
        <h1>The number is {count}</h1>
        {/* 이벤트리스너에는 ()를 작성하지 않음
        ()는 함수를 즉시 실행하는 것을 뜻함*/}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
