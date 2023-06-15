import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { motion } from "framer-motion";

export default function Hero() {
  
  return (
    <Div>
      <Content>
        <Left>
          <motion.h4
            initial={{ opacity: 0, x: "-100" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            with patrick potter
          </motion.h4>
          <motion.h1 style={{ color: 'white'}}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Build Perfect body <br />
            Shape for good and <br />
            Healthy life.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ButtonComponent />
          </motion.div>
        </Left>
        <Right>
          <button className="circle">
            <span className="material-symbols-outlined">play_arrow</span>
          </button>
          <motion.div className="animated-circle"
          initial={{ scale: 1 }}
          animate={{ scale: [1,  1.8], opacity: [1,  0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5
          }}
          ></motion.div>
        </Right>
      </Content>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 94vh;
  background-image: url("/assets/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: absolute;
  top: 0;
  z-index: 0;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin: auto;
  /* padding: 0 30px; */
  margin: 0 auto;
  @media screen and (max-width: 1280px) {
    width: 1000px;
  }
  @media screen and (max-width:600px) {
width: 100%;
grid-template-columns: 1fr;
padding: 0 20px;
  }
 
  
`;
const Left = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  @media screen and (max-width:600px) {
height: auto;
  }
`;
const Right = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
width: 100%;
height: 400px;
@media screen and (max-width:600px) {
margin-top: 70px;
height: auto;
  }
`;
