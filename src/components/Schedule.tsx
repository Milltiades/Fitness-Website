import { useState } from "react";
import { styled } from "styled-components";
import daysData from "../daysData.json";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const handleClick = (dayIndex: number) => {
    setSelectedDay(dayIndex);
  };
  return (
    <Div>
      <Content>
        <div>
          <h4>our time schedule</h4>
          <h1>
            select the perfect time <br />
            you need now
          </h1>
        </div>
        <Up>
          {daysData &&
            daysData.map((day: any, index: any) => {
              return (
                <>
                
                <ChooseDay key={day}>
                  <Button
                    color={selectedDay === index ? "white" : "#2c234d"}
                    background={
                      selectedDay === index ? "#ff1313" : "transparent"
                    }
                    onClick={() => handleClick(index)}
                  >
                    {day.name}
                  </Button>
                </ChooseDay>
                
                </>
              );
              
            })}
      </Up>
              
        <Down>
          <Day>
            <Time>9am-11am</Time>
            <H2>Kick Boxing</H2>{" "}
          </Day>
          <Day>
            <Time>9am-11am</Time>
            <H2>Kick Boxing</H2>{" "}
          </Day>
          <Day>
            <Time>9am-11am</Time>
            <H2>Kick Boxing</H2>{" "}
          </Day>
          <Day>
            <Time>9am-11am</Time>
            <H2>Kick Boxing</H2>{" "}
          </Day>
          <Day>
            <Time>9am-11am</Time>
            <H2>Kick Boxing</H2>{" "}
          </Day>
        
        </Down>
      </Content>
    </Div>
  );
}
const Button = styled.button<any>`
  width: 100%;
  background: ${(props) => props.background};
  border: none;
  font-size: 25px;
  color: ${(props) => props.color};
  height: 100%;
`;

const ChooseDay = styled.div`
  width: 0.7fr;
  height: 92px;
  background: #f7fdff;
  padding: 20px;
`;

const H2 = styled.h2`
  color: #2c234d;
  font-size: 30px;
  display: block;
  font-style: normal;
  font-weight: 500;
`;
const Time = styled.div`
  width: 50%;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Day = styled.div`
  width: 100%;
  height: 210px;
  background: #f7fdff;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #ff1313;
  }
    @media screen and (max-height: 800px){
  height: 180px;
}
`;

const Up = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 0.7fr);
`;
const Down = styled.div`
  margin-top: 15px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

const Content = styled.div`
  width: 1000px;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1280px) {
    max-width: 900px;
  }
    @media screen and (max-height: 800px){
  max-width: 800px;
}

`;
const Div = styled.div`
  position: absolute;
  top: 614vh;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 84vh;
`;
