import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Booklist />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
