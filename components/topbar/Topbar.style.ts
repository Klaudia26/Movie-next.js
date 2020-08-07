import styled from "styled-components";

const Wrapper = styled.div`
  height: 10rem;
  position: fixed;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Logo = styled.div`
  color: #40d59d;
  font-size: 4rem;
  line-height: 0;
`;

const Form = styled.form``;

const Search = styled.input`
  width: 400px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.07);
  color: #fff;
  border-radius: 100px;
  border: none;
  outline: none;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  padding: 0 3rem;
  cursor: pointer;
`;

export default { Wrapper, Container, List, ListItem, Logo, Search, Form };
