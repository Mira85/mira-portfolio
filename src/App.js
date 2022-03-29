import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import"./styles.css";
import projectsArr from "./data";
import { useState, useEffect } from "react";

function App() {

  /* const [data, setData] = useState(null);

  console.log(projectsArr)

  useEffect(() => {setData(projectsArr)}, []);
  console.log('data',data)*/
  return ( 
    
  <div>
    <Header />
    <Main projectsArr ={projectsArr} />
    <Footer />
  </div>
  );
}

export default App;
