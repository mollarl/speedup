import './App.css'
import React, { useEffect } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import ReactGA from "react-ga4";

function App() {

  useEffect(()=>{
    ReactGA.initialize(import.meta.env.VITE_GA_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  },[]);

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
