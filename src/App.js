import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from './Options';


class App extends Component {
  render()
  {
    return (
      <div className="Apps">

          <Action/>
          <Header/>
          <Options/>
          <AddOption/>

      </div>
    );
  }
}

export default App;
