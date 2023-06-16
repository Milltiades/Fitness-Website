import { styled } from "styled-components";

export default function Footer() {
  return (
    <Div>
      <Content>
        <Up>
          <Company>
            <li>
              <h3>COMPANY</h3>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Press & Blog</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </Company>
          <Open>
            <li>
              <h3>OPEN HOUR</h3>
            </li>
            <li>
              <a href="">Monday 11am-7pm</a>
            </li>
            <li>
              <a href="">Tuesday-Friday 11am-8pm</a>
            </li>
            <li>
              <a href="">Saturday 10am-6pm</a>
            </li>
            <li>
              <a href="">Sunday 11am-6pm</a>
            </li>
          </Open>
          <Resources>
            <li>
              <h3>RESOURCES</h3>
            </li>
            <li>
              <a href="">Home Insurance</a>
            </li>
            <li>
              <a href="">Travel Insurance</a>
            </li>
            <li>
              <a href="">Car Insurance</a>
            </li>
            <li>
              <a href="">Business Insurance</a>
            </li>
            <li>
              <a href="">Heal Insurance</a>
            </li>
          </Resources>
          <div>
            <img src="/assets/logo.png" alt="" />
            <P>
              GThe trade war currently ensuing between the <br />
              US and several nations around the <br />
              globe, most fiercely with
            </P>
          </div>
        </Up>
        <Down>
          <P>
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <Heart className="material-symbols-outlined">favorite</Heart> by{" "}
            <Gedeon>Gedeon</Gedeon>{" "}
          </P>
        </Down>
      </Content>
    </Div>
  );
}
const Down = styled.div`
  width: 100%;
  border-top: 1px solid #1f2024;
  padding-bottom: 50px;
  padding-top: 40px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    padding: 25px 0;
    margin-top: 30px;
  }
    
  
`;
const Up = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 150px 0 70px;
  @media screen and (max-width: 1280px) {
    max-width: 1000px;
    padding: 0;
   margin-top: 70px;
  }
   @media screen and (max-height:800px) {
      padding:100px 0 50px;
    }
     @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    padding-top: 0px;
  }
`;

const Div = styled.div`
  width: 100%;
  position: absolute;
  height: auto;
  top: 942vh;
  background: transparent;
  background-image: url("/assets/section_bg03.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   @media screen and (max-width: 600px){
    top: 1030vh ;
    height: auto;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    max-width: 1000px;
    justify-content: space-between;
    height: 100%;
  }
   @media screen and (max-width: 600px){
    width: 100%;
  }
`;

const Company = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-x: hidden;
  & li h3 {
    color: #fff;
    font-family: "Teko", sans-serif;
    font-size: 18px;
    margin-bottom: 23px;
    font-weight: 700;
    text-transform: uppercase;
  }
  & li a {
    text-decoration: none;

    color: #c4c4c4;
    font-weight: 300;
    font-size: 16px;
    font-family: "Barlow", sans-serif;
  }
  & li {
    list-style: none;
  }
  & li a:hover {
    margin-left: 5px;
    transition: all 0.3s ease;
    color: white;
  }

  @media screen and (max-width: 1280px) {
    max-width: 1000px;
    gap: 10px;
    & li a {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const Open = styled(Company)``;

const Resources = styled(Company)`


  `;

const P = styled.p`
  line-height: 1.8;
  margin-bottom: 30px;
  padding-right: 0;
  color: #c4c4c4;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: normal;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1280px) {
    margin: 0;
  }
`;

const Heart = styled.span`
  color: #ff1313;
  margin: 0 5px;
`;
const Gedeon = styled.span`
  color: #ff1313;
  line-height: 1.8;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: normal;
  margin-left: 5px;
`;
