import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <div className="app-container">{children}</div>
        <Footer />
      </>
    );
  }
}

export default App;
