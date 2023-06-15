// import Swiper core and required modules
import { A11y, Autoplay} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import data from swiperData
import dataSwiper from "../swiperData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";


import { styled } from "styled-components";

export default function SwiperComponent() {
  return (
    <SwiperStyled
      // install Swiper modules
      modules={[A11y, Autoplay ]}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {dataSwiper &&
        dataSwiper.map((item: any) => {
          return (
            <SwiperSlide key={item}>
              <P>{item.text}</P>
            
                <H3>{item.name} <Span>{item.profession}</Span> </H3>
                
              
             

            </SwiperSlide>
          );
        })}
        
    </SwiperStyled>
     
  );
}

const SwiperStyled = styled(Swiper)`
  width: 450px;
 @media screen and (max-width: 1280px) {
    max-width: 1000px;
    width: 430px;
    margin-left: 105px;
  }
  @media screen and (max-width: 600px) {
   
    max-width: 340px;
  }
`;


const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    margin-bottom: 37px;
    font-family: "Barlow", sans-serif;
    color: #717b9b;
`
const H3 = styled.h3`
        color: #06080a;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: "Teko",sans-serif;
`

const Span = styled.span`
opacity: 0.8;
font-weight: 300;
font-size: 16px;
margin-left: 10px;
`