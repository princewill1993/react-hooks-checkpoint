import React from "react";
import MovieCard from "./MovieCard";
import { movie } from "../utilis/movies";

function MovieList(props) {
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
        {props.movieToDisplay.map((item) => {
          return (
            <MovieCard
              style={{ width: "500px", height: "500px" }}
              key={item.id}
              posterURL={item.posterURL}
              title={item.title}
              description={item.description}
              rating={item.rating}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;

{
  /* <MovieCard key={item.id}>
<img
  src={item.posterURL}
  alt={item.posterURL}
  style={{ width: "500px", height: "500px" }}
/>
<h3>title:{item.title}</h3>
<p>description:{item.description}</p>
<p> rating:{item.rating}</p>
/> */
}
