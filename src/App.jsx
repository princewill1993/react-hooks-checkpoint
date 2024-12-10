import { useState } from "react";

import "./App.css";
import MovieList from "./components/MovieList";
import { movie } from "./utilis/movies";
import AddMovie from "./components/AddMovie";
import { Select } from "antd";

function App() {
  const [ourMovies, setOurMovies] = useState(movie);

  const handleMoviesToAdd = (moviesToAdd) => {
    setOurMovies([moviesToAdd, ...ourMovies]);
  };

  // save movies to local storage

  const saveMovies = () => {
    const saveMoviesToLocalStorage = localStorage.setItem(
      "allMovies",
      JSON.stringify(ourMovies)
    );
  };

  // get movies from local storage

  const getMoviesFromLocalStorage = () => {
    ourMovies = localStorage.getItem("allMovies")
      ? JSON.parse(localStorage.getItem("allMovies"))
      : [];
    setOurMovies();
  };

  // To handle filtering of movies
  const handleMovieTitleFilter = (value) => {
    console.log("Hello world");

    switch (value) {
      // filter movies by title
      case value:
        {
          let filteredMovies = ourMovies.filter(
            (items) => items.title === value
          );
          console.log(filteredMovies);

          setOurMovies(filteredMovies);
        }
        break;

      // filter movies by all

      case "all":
        {
          setOurMovies(ourMovies);
        }
        break;
    }
  };

  const handleMovieRatingFilter = (value) => {
    switch (value) {
      // filter movies by rating
      case value:
        {
          let filteredMovies = ourMovies.filter(
            (items) => items.rating === value
          );
          setOurMovies(filteredMovies);
        }
        break;

      case "all":
        setOurMovies(ourMovies);
        break;
    }
  };

  return (
    <>
      <Select
        placeholder="Select movie title"
        onChange={handleMovieTitleFilter}
        options={[
          {
            value: "spider man 3",
            label: "spider man 3",
          },
          {
            value: "superman",
            label: "superman",
          },
          {
            value: "batman",
            label: "batman",
          },
          {
            value: "wonder woman",
            label: "wonder woman",
          },
          {
            value: "avengers(infinity war)",
            label: "avengers(infinity war)",
          },
          {
            value: "the boogeyman",
            label: "the boogeyman",
          },
        ]}
      />
      <Select
        placeholder="Select movie rating"
        onChange={handleMovieRatingFilter}
        options={[
          {
            value: "4.8",
            label: "4.8",
          },
          {
            value: "4.5",
            label: "4.5",
          },
          {
            value: "4.9",
            label: "4.9",
          },
          {
            value: "4.0",
            label: "4.0",
          },
          {
            value: "4.3",
            label: "4.3",
          },
          {
            value: "4.1",
            label: "4.1",
          },
        ]}
      />
      <AddMovie handleMoviesToAdd={handleMoviesToAdd} />
      <h1></h1>
      <MovieList movieToDisplay={ourMovies} />
    </>
  );
}

export default App;
