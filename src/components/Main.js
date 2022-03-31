import "./Main.css"
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import projectsArr from "../data";









function Main(props) {

    const [show, setShow] = useState({
        about: false,
        experience: false,
        resume: false,
        contact: false
    });

    const handleClose = () => setShow(false);
    const handleShow = (option) => {
        if (option === 'about') {
            setShow({ ...show, about: true });
        } else if (option === 'experience') {
            setShow({ ...show, experience: true });
        } else if (option === 'resume') {
            setShow({ ...show, resume: true });
        } else if (option === 'contact') {
            setShow({ ...show, contact: true });
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
            <Modal dialogClassName='my-modal' show={show.about} onHide={handleClose}>
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
                <Modal.Body>
                    
                            <div className="projectArea">
                            {projectsArr.map((object, arrayIdx) => {
                        return (
                                <Card key={arrayIdx} style={{ width: "20rem" }}>
                                    <Card.Img variant="top" src={object.image} style={{
                                        height: "15.5rem",
                                        width: "20rem",
                                    }} className="image" />
                                    <Card.Body>
                                        <Card.Title className="cardTitle">{object.name}</Card.Title>
                                        <Card.Text>
                                            <div>Description: {object.description}</div>
                                            <div>Technologies: {object.technologies}</div>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                           
                        );

                    })};
                     </div>
                </Modal.Body>


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