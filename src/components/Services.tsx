import { styled } from "styled-components";
import data from "../data.json";

const newData = data.slice(0, 3);

export default function Services() {
  return (
    <Div>
      <Up>
        <Left>
          <h4>OUR SERVICES FOR YOU</h4>
          <H1>
            PUSH YOUR LIMITS FORWARD <br />
            WE OFFER TO YOU
          </H1>
        </Left>
        <Button>More Services</Button>
      </Up>
      <Down>
        {newData &&
          newData.map((item: any) => {
            return (
              <Card key={item} className="card">
                <span className="material-symbols-outlined logo">{item.logo}</span>
                <H2>{item.name}</H2>
                <P>{item.text}</P>
              </Card>
            );
          })}
      </Down>
    </Div>
  );
}
const Card = styled.div`
  position: relative;
  height: 370px;
  background: white;
  padding: 50px;
  width: 370px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &::after {
    content: "DISCOVER MORE ABOUT US";
    width: 370px;
    height: 60px;
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    transition: transform 0.8s;
    z-index: 1;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: translateY(60px);
  }
  &:hover::after {
    background: #ff1313;
    transform: translateY(0);
  }
   @media screen and (max-height: 800px) {
    height: 300px;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 50px;
`;

const Left = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  align-items: end;
  padding: 100px 0 95px;

  @media screen and (max-width: 1280px) {
    max-width: 1000px;
  }
   @media screen and (max-height: 800px) {
    padding: 50px 0 40px;
  }
`;
const Down = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 1280px) {
    max-width: 1000px;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 114vh;
  background: black;
  position: absolute;
  top: 188vh;
  background-image: url("/assets/services.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: #ff1313;
  width: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: none;
  text-transform: uppercase;
  color: white;
  height: 60px;
  font-size: 18px;
  position: relative;

  &::before {
    content: "";
    width: 101%;
    height: 101%;
    background: #370202;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s;
    opacity: 0.2;
    z-index: 1;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
  &:hover::before {
    transform: scaleX(100%);
  }
`;

const P = styled.p`
  color: #303133;
  font-size: 16px;
  line-height: 30px;
  font-weight: normal;
  margin-bottom: 36px;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: "Teko", sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 21px;
  display: block;
  color: #06080a;
  text-transform: uppercase;
  text-align: center;
`;
