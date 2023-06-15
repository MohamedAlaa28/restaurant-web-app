import './App.css';
import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import About from './component/About';
import Rate from './component/Rating';

function App() {
  return (
    <React.Fragment className="App">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Rate></Rate>
      <About></About>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
