import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/action";
import { ModalMovie } from "../modal/ModalMovie";

export const withMovieModal = (Page) => (props) => {
  const isModal = useSelector((state) => state.isModal);
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Page {...props} />
      {!!isModal && (
        <ModalMovie handleButton={handleCloseModal} movie={selectedMovie} />
      )}
    </>
  );
};
