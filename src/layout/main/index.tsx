// import React from 'react'
import Home from "../../pages/home"
import Footer from "../footer"
import Navbar from "../navbar"
import { MainContainer } from "./main.style"

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
        <Home />
      <Footer />
    </MainContainer>
  )
}

export default Main
