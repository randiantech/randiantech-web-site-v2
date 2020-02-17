import React from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-container">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
