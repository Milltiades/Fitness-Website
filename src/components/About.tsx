import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";

export default function About() {
  return (
    <Div>
      <Content>
        <Left />
        <Right>
          <h4>ABOUT OUR GYM</h4>
          <H1>
            SAFE BODY BUILDING PROPER <br />
            SOLUTIONS THAT SAVES OUR <br />
            VALUABLE TIME!
          </H1>
          <P>
            Brook presents your services with flexible, convenient and cdpose
            layouts. <br />
            You can select your favorite layouts & elements for cular ts with
            unlimited <br />
            ustomization possibilities. Pixel-perfect replication of the
            designers is intended.
          </P>

          <P2>
            Brook presents your services with flexible, convefnient and chient{" "}
            <br />
            anipurpose layouts. You can select your favorite layouts.
          </P2>

          <ButtonComponent />
        </Right>
      </Content>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 94vh;

  position: absolute;
  top: 94vh;
  z-index: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    top: 94vh;
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin: auto;
  /* padding: 0 30px; */
  @media screen and (max-width: 1250px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    padding: 20px;
    height: auto;
  }
   
`;
const Left = styled.div`
width: 100%;
  height: 700px;
  overflow: hidden;
  background: black;
  background-image: url("/assets/about.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-height:800px) {
      height: 600px;
    }
    @media screen and (max-width: 600px){
    height: 500px;
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: transparent;
  padding-left: 65px;
  @media screen and (max-width: 600px){
  padding: 20px 0 0;
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: #2c234d;
  @media screen and (max-width: 600px){
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #212025;
  margin-bottom: 25px;
line-height: 30px;
  font-family: "Barlow", sans-serif;
  color: #212025;
`;

const P2 = styled.p`
  font-size: 16px;
  color: #212025;
  font-weight: 300;
  font-family: "Barlow", sans-serif;
  opacity: 0.8;
  line-height: 30px;
  margin-bottom: 65px;
`;
