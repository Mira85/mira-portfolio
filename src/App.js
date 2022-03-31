import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsArr from "./data";
import { useState, useEffect } from "react";

function App() {



  return (

    <div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
