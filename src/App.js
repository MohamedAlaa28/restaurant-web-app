import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <React.Fragment className="App">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
