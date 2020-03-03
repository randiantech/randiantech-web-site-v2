import React from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        <div className="app-container">{children}</div>
      </div>
    );
  }
}

export default App;
