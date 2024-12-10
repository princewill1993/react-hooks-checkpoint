import { Button, Modal, Input, message } from "antd";
import React, { useState } from "react";
import validator from "validator";

function AddMovie(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // A state to hold all the movie information that users can add
  const [movieData, setMovieData] = useState({
    id: "",
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const errorAlert = (error_message) => {
    messageApi.open({
      type: "error",
      content: error_message,
    });
  };

  const handleOk = () => {
    if (movieData.title.trim().length < 2) {
      errorAlert("Please provide a movie title");
      return;
    }

    if (movieData.description === null) {
      errorAlert("Please provide a description for the movie");
      return;
    }

    if (validator.isURL(movieData.posterURL) === false) {
      errorAlert("Please provide a movie URL");
      return;
    }

    if (movieData.rating === null) {
      errorAlert("Please provide a rating for the movie");
      return;
    }

    const moviesToAdd = { ...movieData, id: Math.floor(Math.random() * 99999) };
    props.handleMoviesToAdd(moviesToAdd);

    // to reset the movie data object to its default state after submitting the input value of the movies information
    setMovieData({
      id: "",
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {contextHolder}
      <Button type="primary" onClick={() => showModal(true)}>
        Add new movie
      </Button>
      <Modal
        title="Add new movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="grid gap-4">
          <Input
            size="large"
            value={movieData.title}
            onChange={(event) => {
              setMovieData({ ...movieData, title: event.target.value });
            }}
            placeholder="Enter movie name"
          />

          <Input
            value={movieData.description}
            onChange={(event) => {
              setMovieData({ ...movieData, description: event.target.value });
            }}
            placeholder="Enter movie description"
          />

          <Input
            value={movieData.posterURL}
            onChange={(event) => {
              setMovieData({ ...movieData, posterURL: event.target.value });
            }}
            placeholder="Enter movie URL"
          />

          <Input
            value={movieData.rating}
            onChange={(event) => {
              setMovieData({ ...movieData, rating: event.target.value });
            }}
            placeholder="Enter movie rating"
          />
        </form>
      </Modal>
    </div>
  );
}

export default AddMovie;
