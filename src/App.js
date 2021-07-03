import React, { Component } from 'react';
import HeaderContent from './Components/HeaderContent';
import CorouselContent from './Components/CorouselContent';
import MainContent from './Components/MainContent';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderContent />
        <br />
        <CorouselContent />
        <MainContent />
      </div>
    );
  }
}

export default App;
