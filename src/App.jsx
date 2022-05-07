
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Contact  from './components/contact/Contact';
import Footer  from './components/footer/Footer';




const App = () => {
  return (
    <>
      <div className='main' >
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
      

    </>
    
  )
}

export default App;
