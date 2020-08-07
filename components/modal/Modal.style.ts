import styled from "styled-components";
import { IProps } from "./Modal";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Backdrop = styled.div`
//   z-index: 100;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.8);
//   visibility: ${(props: IProps) =>
//     props.backdrop
//       ? props.backdrop && props.visible
//         ? "visible"
//         : "hidden"
//       : "hidden"};
// `;

const Modal = styled.div`
  /* z-index: 1000;
  position: absolute;
  max-width: 500px;
  min-width: 260px;
  min-height: 160px;
  width: ${(props: IProps) => (props.width ? props.width : "90%")};
  height: ${(props: IProps) => (props.height ? props.height : "auto")};
  top: 20vh;
  background: #32353d;
  border-radius: 2px;
  padding: 15px;
  visibility: ${(props: IProps) => (props.visible ? "visible" : "hidden")}; */
  background-color: white;
    color: #000;
    width: 700px;
    border-radius: 10px;
    position: relative;
`;

const Header = styled.div`
  border-bottom: 1px solid grey;
  padding: 30px;
`;

const Btn = styled.button`
  padding: 10px 30px;
  border: none;
  outline: none;
  background-color: #40d59d;
  color: #fff;
  border-radius: 5px;
  margin: 0 5px;
  font-size: 14px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s;
`;

const Body = styled.div`
  display: flex;
`;

const Image = styled.div`
  margin-right: 5rem;
`;

const Title = styled.p`
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Content = styled.div`
  border-bottom: 1px solid grey;
  padding: 30px;
`;

const Action = styled.div`
  padding: 30px;
  text-align: right;
`;

export default {
  Wrapper,
  // Backdrop,
  Modal,
  Header,
  Btn,
  Body,
  Image,
  Title,
  Content,
  Action,
};
