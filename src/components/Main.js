import "./Main.css"
import { Route, Switch, Redirect } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";
import { useState} from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function Main(props) {

    const [show, setShow] = useState({
        about:false, 
        experience:false,
        resume:false, 
        contact:false
    });

    const handleClose = () => setShow(false);
    const handleShow = (option) => {
        if(option === 'about'){
            setShow({...show, about:true});
        } else if (option === 'experience'){
            setShow({...show, experience :true});
        } else if (option === 'resume'){
            setShow({...show, resume :true});
        } else if (option === 'contact'){
            setShow({...show, contact :true});
        }
    }
    

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
                            <Button onClick={() => handleShow('about')}>About me</Button>
                            <Button onClick={() => handleShow('experience')}>Experience</Button>
                            <Button onClick={() => handleShow('resume')}>Resume</Button>
                            <Button onClick={() => handleShow('contact')}>Contact</Button>
                            
                    </div>
                </div>
            </div>
            <div className="introR">right
                <div className="introRBox">


                </div>
            </div>
            <Modal show={show.about} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>About me</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show.experience} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Experience</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show.resume} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>resume</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={show.contact} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>contact</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
        </div>
    ) 
}

export default Main;