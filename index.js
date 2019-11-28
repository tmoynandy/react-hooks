import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SongList from './components/SongList'

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
        <SongList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
