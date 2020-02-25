import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async await 비동기 함수를 처리할 때 사용하는 예약어
  // 시간이 얼마나 걸릴지 모르는 API, DB연동 등에 사용, 반드시 쌍으로 사용
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // map 함수는 항상 값을 return 해야 함
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
