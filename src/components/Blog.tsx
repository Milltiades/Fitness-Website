import { styled } from "styled-components";

export default function Blog() {
  return (
    <Div>
      <Content>
        <Up>
          <h4>RECENT NEWS FROM BLOG</h4>
          <h1>
            GYM TIPS NEWS FOR YOU THAT <br />
            SELECTED BY US
          </h1>
        </Up>
        <Down>
          <BlogDiv>
            <ImgDiv />
            <ContentDiv>
                <P> Creative derector</P>
                <H3>Footprints in Time is perfect House <br/>
                 in Kurashiki</H3>
            </ContentDiv>
          </BlogDiv>
          <BlogDiv>
            <ImgDiv2 />
            <ContentDiv>
                <P> Creative derector</P>
                <H3>Footprints in Time is perfect House <br/>
                 in Kurashiki</H3>
            </ContentDiv>
          </BlogDiv>
        </Down>
      </Content>
    </Div>
  );
}


const P = styled.p`

color: #0d1628;
    font-size: 16px;
    margin: 0;
    padding: 0;
    margin-bottom: 13px;
    margin-left: 72px;
    display: inline-block;
    position: relative;
    margin-bottom: 13px;
    margin-left: 72px;
    display: inline-block;
   
    &::before {
        content: '';
        top: 50%;
        transform: translateY(-50%);
        left: -70px;
        position: absolute;
        width: 40px;
    height: 2px;
    background: #0d1628;
    }
`
const H3 = styled.h3`
    color: #191d34;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 20px;
    font-family: "Barlow",sans-serif;
    display: block;
    
    @media screen and (max-width:1280px) {
      font-size: 20px;
    }
     @media screen and (max-height:800px) {
      font-size: 18px;
    }
`

const ContentDiv = styled.div`
  width: 100%;
  height: 20vh;
  background: #f7fdff;
  display: flex;
  flex-direction: column;
      padding: 37px 129px 37px 50px;
      @media screen and (max-width: 1280px){
        padding: 20px 0 0 30px;
  }
`;
const BlogDiv = styled.div`
  width: 100%;
  height: 57vh;
  display: flex;
  flex-direction: column;
`;
const ImgDiv = styled.div`
  width: 100%;
  height: 37vh;
  background-image: url("/assets/blog1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "24";
    width: 92px;
    height: 88px;
    background: #ff1313;
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    line-height: 1;
    display: flex;
    flex-direction: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
  }

   @media screen and (max-height: 800px) {
   height: 30vh;
   &::before {
    width: 60px;
    height: 60px;
   }
  }
`;

const ImgDiv2 = styled(ImgDiv)`
  background-image: url("/assets/blog2.png");
`;
const Content = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1280px){
    max-width: 1200px;
  }
`;

const Up = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 195px 180px;
  top: 792vh;
`;
