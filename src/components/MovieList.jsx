import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { movie } from "../utilis/movies";

function MovieList() {
  const style = {
    display: "flex",
    // flexWrap: "wrap",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    gap: "3rem",
  };
  return (
    <div>
      <h1>Our movie list</h1>

      <div style={style}>
        {movie.map((item) => {
          return (
            <Link to={`/movieList/${item.id}`} key={item.id}>
              <MovieCard
                style={{ width: "500px", height: "500px" }}
                posterURL={item.posterURL}
                title={item.title}
                description={item.description}
                rating={item.rating}
                id={item.id}
                trailer={item.trailer}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
