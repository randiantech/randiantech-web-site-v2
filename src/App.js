import React from 'react';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <>
        <Header />
        <div className="app-container">{children}</div>
      </>
    );
  }
}

export default App;
