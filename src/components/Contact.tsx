
import { styled } from "styled-components";

export default function Contact() {
  return (
    <Div>
      <Content>
        <Left></Left>
        <Right>
          <h4>contact form</h4>
          <H1>
            FEEL FREE TO CONTACT <br />
            WITH US!
          </H1>
          <Form action="">
            <Label htmlFor="">
              <input type="text" placeholder="Name"/>
              <input type="text" placeholder="Phone"/>
            </Label>
            <Label htmlFor="">
              <input type="text" />
              <input type="text" placeholder="Email"/>
            </Label>
            <Textarea name="" id="" placeholder="M E S S A G E"></Textarea>
            <Button>SEND MESSAGE</Button>
          </Form>
        </Right>
      </Content>
    </Div>
  );
}

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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
     @media screen and (max-height: 800px){
gap: 10px;
}
@media screen and (max-width:600px){
  gap: 10px;
  }
`

const Label = styled.label`
    gap: 30px;
    display: flex;
    flex-direction: row;
    & input {
        background: none;
    height: 60px;
    width: 100%;
    padding: 10px 25px;
    padding-right: 30px;
    border: 0;
    color: #112957;
   
    text-transform: capitalize;
    border-radius: 0px;
    border-bottom: 2px solid #e9f0f4;
    font-size: 16px;
    font-family: 'Teko', sans-serif;
    }
     @media screen and (max-height: 800px){
  height: 50px
}
  
`
const Textarea = styled.textarea`
color: #112957;
    background: none;
    margin-bottom: 65px;
    letter-spacing: 2px;
    text-transform: capitalize;
    height: 130px;
    width: 100%;
    padding: 30px 21px;
    border: 0;
    border-radius: 0px;
    border-bottom: 2px solid #e9f0f4;
     @media screen and (max-height: 800px){
  margin-bottom: 30px;
}
    `

const Div = styled.div`
  width: 100%;
  position: absolute;
  top: 748vh;
  height: 94vh;
  background: transparent;
  @media screen and (max-width:600px){
    top: 745vh;
    height: auto;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media screen and (max-width:600px){
   flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 65vh;
  background-image: url("/assets/contact_form.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
@media screen and (max-width:600px){
   width: 100%;
   height: 50vh;
  }
`;

const Right = styled.div`
  max-width: 600px;
  background: #f7fdff;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 67px;
  
  @media screen and (max-width: 1280px){
    width: 500px;
    padding: 35px;
  }
  @media screen and (max-height: 800px){
  height: 75vh;
  padding: 35px;
}
@media screen and (max-width:600px){
   width: 100%;
   height: auto;
   padding: 20px;
  }
 
`;

const H1 = styled.h1`
  font-size: 50px;
    display: block;
    color: #2c234d;
    font-weight: 700;
    text-transform: uppercase;
 @media screen and (max-height: 800px){
  font-size: 40px;
  margin-bottom: 0;
}
@media screen and (max-width:600px){
   font-size: 2rem;
  }
`