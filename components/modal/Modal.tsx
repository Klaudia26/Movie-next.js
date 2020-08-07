import { closeModal } from "../../redux/modal/action";
import { useDispatch } from "react-redux";

import MODAL from "./Modal.style";

export interface IProps {
  visible: boolean;
  // body: JSX.Element;
  // action: any;
  height?: string;
  width?: string;
  backdrop?: boolean;
}

export const Modal: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <MODAL.Wrapper onClick={handleCloseModal}>
      <MODAL.Modal {...props} onClick={(e) => e.stopPropagation()}>
        <MODAL.Header></MODAL.Header>
        {props.children}
        {/* <MODAL.Backdrop visible={props.visible} backdrop={props.backdrop} /> */}
      </MODAL.Modal>
    </MODAL.Wrapper>
  );
};
