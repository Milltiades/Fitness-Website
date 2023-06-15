import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { motion } from "framer-motion";

export default function HeaderScroll() {
  return (
    <Div>
      <img src="/assets/logo.png" alt="" />
      <Nav>
        <Li>
          <A href="#">home</A>
        </Li>
        <Li>
          <A href="#">about</A>
        </Li>
        <Li>
          <A href="#">services</A>
        </Li>
        <Li>
          <A href="#">schedule</A>
        </Li>
        <Li>
          <A href="#">gallery</A>
        </Li>
        <Li>
          <A href="#">blog</A>
        </Li>
        <Li>
          <A href="#">contact</A>
        </Li>
        <Li>
          <ButtonComponent/>
        </Li>
      </Nav>
    </Div>
  );
}

const Div = styled(motion.div)`
  width: 100%;
  padding: 20px 130px;
  background: black;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000000000;
  position: fixed;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 2em;
  text-transform: capitalize;
  font-size: 1.25em;
  cursor: pointer;
  position: relative;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    color: #cf4536;
  }
`;

