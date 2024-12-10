import React from "react";
import { movie } from "../utilis/movies";
import { Card } from "antd";
const { Meta } = Card;

function MovieCard(props) {
  return (
    <Card
      style={{ display: "grid", gridTemplateColumns: "" }}
      cover={
        <img
          style={{ width: "300px", height: "300px" }}
          className="w-[-500px] h-[-300px] cover"
          alt="example"
          src={props.posterURL}
        />
      }
    >
      <Meta
        title={props.title}
        description={
          <div className="flex flex-col gap-3">
            {/* <p>
              <strong>title:</strong>
              {props.title}
            </p> */}

            <p>
              <strong>description:</strong>
              {props.description}
            </p>

            <p>
              <strong>rating:</strong>
              {props.rating}
            </p>
          </div>
        }
      />
    </Card>
  );
}

export default MovieCard;
