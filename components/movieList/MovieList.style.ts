import styled, { css } from "styled-components";

const List = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 1rem;

  ${(props) =>
    props.asSlider &&
    css`
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      overflow-x: scroll;
      align-items: stretch;
      justify-content: flex-start;
    `}
`;

export default { List };
