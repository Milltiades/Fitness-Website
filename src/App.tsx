import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { styled } from "styled-components";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import HeaderScroll from "./components/HeaderScroll";


function App() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <>
      <Header />
      <div
        style={{ display: fix ? "flex" : "none" }}
       
      >
        <HeaderScroll />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />

      <ScrollTop
        className="scroll-to-top"
        smooth
        color="white"
        top={300}
        width="20"
        height="20"
      />
    </>
  );
}

export default App;

const ScrollTop = styled(ScrollToTop)`
  width: 50px;
  height: 50px;
  background: #ff1313;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 50px;
  z-index: 1000000;
  right: 20px;
  opacity: 0.8;
`;
