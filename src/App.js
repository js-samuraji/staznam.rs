import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="/staznam.rs">
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
