import "./Main.css"
import { Button, Modal } from "react-bootstrap";
import { useState} from "react";
import { Link } from "react-router-dom";


function Home(props) {

    

    return (
        <div className="intro">
            <div className="introL">left
                <div className="introLBox">
                    <h2 className="introSentence">Hey there, My name is </h2>
                    <h1 className="introName">Mira Makadia</h1>
                    <div className="titles">
                        <div className="titlesBox">
                            <div className="item">Software Developer</div>
                            <div className="item">MERN Stack Developer</div>
                            <div className="item">React Developer</div>
                        </div>
                    </div>
                    <div className="buttonsArea">
                    <Link to="/about">
                            <Button>About me</Button>
                            </Link>
                            <Button>Work</Button>
                            <div>Resume</div>
                            <div>Contact</div>
                    </div>
                </div>
            </div>
            <div className="introR">right
                <div className="introRBox">


                </div>
            </div>
          
      
        </div>
    )
}

export default Home;