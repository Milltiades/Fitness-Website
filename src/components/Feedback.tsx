import { styled } from "styled-components";
import SwiperComponent from "./Swiper";

export default function Feedback() {
  return (
    <Div>
      <Content>
        <Left/>
        <Right>
            <h4 style={{marginLeft:'205px'}}>Clients Feedback</h4>
            <H1>What Our Client think <br/>
             about our gym</H1>
             <SwiperComponent/>
        </Right>
      </Content>
    </Div>
  );
}

const H1 = styled.h1`
  font-size: 2.5em;
  color: #2c234d;
  margin-left: 105px;
`;


const Div = styled.div`
  position: absolute;
  top: 302vh;
  display: grid;
  align-items: center;
  width: 100%;
  height: 94vh;
  grid-area: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
`;
const Left = styled.div`
  width: 100%;
  height: 600px;
  background: black;
  background-image: url('/assets/feedback.png');
  background-repeat: no-repeat;
  background-size: cover;
position: relative;
  &::after {
    content: "";
    background-image: url('/assets/qutaion.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 138px;
  height: 98px;
  position: absolute;
  bottom: 150px;
right: -69px;
  }

`;

const Right = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

