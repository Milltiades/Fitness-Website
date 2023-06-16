import { styled } from "styled-components";

export default function OfferLine() {
  return (
    <Div>
      <Content>
        <H1 style={{color: 'white'}}>
          June membership offer <br />
          available Now
        </H1>
        <Button>more services</Button>
      </Content>
    </Div>
  );
}

const H1 = styled.h1`
 color: white;
  font-size: 50px;
     @media screen and (max-width: 600px) {
   font-size: 2rem;
  }
`

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

const Div = styled.div`
  background: #002543;
  position: absolute;
  width: 100%;
  height: 30vh;
  top: 634vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   @media screen and (max-width: 600px) {
    top: 710vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  padding: 100px 0 95px;
  @media screen and (max-width: 1280px) {
    max-width: 1000px;
  }
   @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 0 20px;
  }
`;
