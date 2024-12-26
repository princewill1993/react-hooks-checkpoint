import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { movie } from "../utilis/movies";
import { Result } from "antd";

function DescriptionPage() {
  let params = useParams();
  console.log(params);

  const [movieDescription, setmovieDescription] = useState(null);

  const getMovieDescription = () => {
    let result = movie.find((m) => m.id === Number(params.id));
    if (result === undefined) {
      setmovieDescription("Sorry, movie not found");
    } else {
      setmovieDescription(result);
    }
  };

  useEffect(() => {
    getMovieDescription();
  }, []);

  if (movieDescription === null) {
    return (
      <div>
        <h1>Movie description loading ...</h1>
      </div>
    );
  }

  if (movieDescription === "Sorry, movie not found") {
    return (
      <Result status="404" title="404" subTitle=" Sorry, movie not found" />
    );
  }

  return (
    <div>
      <h1>{movieDescription.title}</h1>
      <p>{movieDescription.description}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <iframe
          width="560"
          height="315"
          src={movieDescription.trailer}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Link
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.7rem",
            padding: "1rem",
          }}
          to="/"
        >
          Go back to Movie list
        </Link>
      </div>
    </div>
  );
}

export default DescriptionPage;
