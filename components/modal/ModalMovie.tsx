import React from "react";
import { Modal } from "./Modal";

import MODAL from "./Modal.style";

export const ModalMovie = ({ movie, handleButton }) => {
  const renderAction = () => {
    return (
      <div>
        <MODAL.Btn onClick={handleButton} className="btn">
          close
        </MODAL.Btn>
      </div>
    );
  };
  const renderBody = () => {
    return (
      <MODAL.Body>
        <MODAL.Image>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.id}
          />
        </MODAL.Image>
        <div>
          <MODAL.Title>{movie.original_title}</MODAL.Title>
          <p>{movie.overview}</p>
        </div>
      </MODAL.Body>
    );
  };
  return (
    <div>
      <Modal visible>
        <MODAL.Content>{renderBody()}</MODAL.Content>
        <MODAL.Action>{renderAction()}</MODAL.Action>
      </Modal>
    </div>
  );
};
