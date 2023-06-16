import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeaderScroll() {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  return (
    <>
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
      <menu>
      <Span className="material-symbols-outlined menu" onClick={() => setIsMenu(!isMenu)}>
{!isMenu? 'menu' : 'close'}
</Span>
      </menu>
    </Div>
    <Menu display= {isMenu ? 'flex' : 'none'}>
      <ul>
        <li className="menu-li">
          <a href="/" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth'})}> Home</a>
         </li>
        <li className="menu-li">
          <a href="/"> About</a>
         </li>
        <li className="menu-li">
          <a href="/"> Services</a>
         </li>
        <li className="menu-li">
          <a href="/"> Contact</a>
         </li>
      </ul>
    </Menu>
    </>
  );
}

const Menu = styled.div<any>`
  width: 100%;
  height: 100vh;
  background: black;
  position: fixed;
  z-index: 500;
  top: 0;
  display: ${props => props.display};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const Span = styled.span`
  color: #ff1313;
  scale: 1.5;
`

const Div = styled(motion.div)<any>`
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

  @media screen and (max-width: 1280px) {
    padding: 20px ;
  }

   @media screen and (max-height:800px) {
      padding: 20px 
    }
      @media screen and (max-width: 600px){
    width: 100%;
    
    position: fixed;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
    @media screen and (max-width: 600px){
    display: none;
  }
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

