import React from 'react';
import Landing from './components/Landing';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Landing />
      </Wrapper>
      <h1>Test</h1>
    </div>
  );
}

export default App;
