import { styled } from "styled-components";

export default function Members() {
  return (
    <Div>
      <Content>
        <Up>
          <Text>
            <h4>our team members</h4>
            <h1>
              our most experienced <br /> trainers
            </h1>
          </Text>
          <Button>more services</Button>
        </Up>
        <Down>
          <Member1></Member1>
          <Member2></Member2>
          <Member3></Member3>
        </Down>
      </Content>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 94vh;
  top: 490vh;
  background: transparent;
  width: 100%;
  padding-bottom: 100px;
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    max-width: 1000px;
  }
`;
const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
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

const Down = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  margin-top: 95px;
   @media screen and (max-height: 800px) {
   max-width: 800px;
   margin: 40px auto 10px;
  }
`;

const Member1 = styled.div`
  background-image: url("/assets/team1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &::after {
    content: " Jhon Sunsaev";
    font-size: 30px;
    width: 100%;
    height: 160px;
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
    opacity: 0.8;
  }
  &:hover::after {
    background: #ff1313;
    transform: translateY(0);
  }

  @media screen and (max-width: 1280px) {
    height: 400px;
  }
   @media screen and (max-height: 800px) {
    height: 350px;
    width: 40%;
    &::after{
      height: 90px;
    }
  }
`;

const Member2 = styled(Member1)`
  background-image: url("/assets/team2.png");
`;

const Member3 = styled(Member1)`
  background-image: url("/assets/team3.png");
`;
