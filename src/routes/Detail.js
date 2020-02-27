import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // location.state 속성값이 정의되지 않았으면 홈으로 보냄(리다이렉트)
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    return <span>{location.state.title}</span>;
  }
}

export default Detail;
