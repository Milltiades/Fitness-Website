
import { styled } from "styled-components";

export default function Gallery() {
  return (
    <Div>
      <Content>
        <Div1>
          <Inside className="inside">
            <Button>
              <span className="material-symbols-outlined arrow">
                arrow_right_alt
              </span>
            </Button>
            <H3>Best fitness gallery</H3>
            <P>Fitness, Body</P>
          </Inside>
        </Div1>
        <Div2>
          {" "}
          <Inside className="inside">
            <Button>
              <span className="material-symbols-outlined  arrow">
                arrow_right_alt
              </span>
            </Button>
            <H3>Best fitness gallery</H3>
            <P>Fitness, Body</P>
          </Inside>
        </Div2>
        <Div3>
          {" "}
          <Inside className="inside">
            <Button>
              <span className="material-symbols-outlined  arrow">
                arrow_right_alt
              </span>
            </Button>
            <H3>Best fitness gallery</H3>
            <P>Fitness, Body</P>
          </Inside>
        </Div3>
        <Div4>
          {" "}
          <Inside className="inside">
            <Button>
              <span className="material-symbols-outlined  arrow">
                arrow_right_alt
              </span>
            </Button>
            <H3>Best fitness gallery</H3>
            <P>Fitness, Body</P>
          </Inside>
        </Div4>
        <Div5>
          {" "}
          <Inside className="inside">
            <Button>
              <span className="material-symbols-outlined  arrow">
                arrow_right_alt
              </span>
            </Button>
            <H3>Best fitness gallery</H3>
            <P>Fitness, Body</P>
          </Inside>
        </Div5>
      </Content>
    </Div>
  );
}
const H3 = styled.h1`
  font-style: normal;
  font-weight: 500;
  color: white;
  font-size: 30px;

  margin-top: 25px;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: white;
  transform: translateY(-35px);
`;

const Button = styled.button`
  color: #fff;
  background: #ff0000;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  &:hover {
    background: #fff;
  }
  &:hover .material-symbols-outlined.arrow {
    color: #ff0000;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 94vh;
  position: absolute;
  top: 396vh;
  background: transparent;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
const Inside = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  min-width: 250px;
`;

const Div1 = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  background: gray;
  height: 80vh;
  background-image: url("/assets/gallery1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  &:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    filter: brightness(0.5);
    position: absolute;
    background: black;
    opacity: 0.5;
  }

  &:hover .inside {
    display: flex;
  }

  @media screen and (max-width: 1280px) {
    height: 70vh;
    overflow-x: hidden;
  }
`;

const Div2 = styled.div`
  background: gray;
  background-image: url("/assets/gallery2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;

  &:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    filter: brightness(0.5);
    position: absolute;
    background: black;
    opacity: 0.5;
  }

  &:hover .inside {
    display: flex;
  }
 
`;
const Div3 = styled(Div2)`
  background-image: url("/assets/gallery3.png");
`;
const Div4 = styled(Div2)`
  background-image: url("/assets/gallery4.png");
`;
const Div5 = styled(Div2)`
  background-image: url("/assets/gallery5.png");
`;
