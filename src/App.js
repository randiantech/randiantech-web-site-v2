import React from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header linkBtnText="RTS Login" linkBtnPath="/rts/login" />
        <div className="app-container">{children}</div>
        <Footer />
      </>
    );
  }
}

export default App;
