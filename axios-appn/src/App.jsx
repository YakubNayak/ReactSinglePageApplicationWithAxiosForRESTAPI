import React from "react";
import Header from "./Header";
import Body from "./Body";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <Header />
      </header>
      <nav className="nav">
        <Nav />
      </nav>
      <main className="body">
        <Body />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
