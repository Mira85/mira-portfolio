import "./Main.css"
import React, { useRef } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import projectsArr from "../data";
import emailjs from '@emailjs/browser';
import "bootstrap-icons/font/bootstrap-icons.css";



/* export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_95fcx2y', form.current, 'lSR6CQp9OHmqtdgo8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return sendEmail;
} */


export function Main(props) {

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xsz4gbp', 'template_95fcx2y', form.current, 'lSR6CQp9OHmqtdgo8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


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
                        <Button onClick={() => handleShow('about')}>About</Button>
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
                <Modal.Body>
                    
                    <Card style={{ maxWidth: "50rem" }}>
                        <Row className='no-gutters'>
                            <Col md={5} lg={5}>
                        <Card.Img variant="top" src="images/profilepic.png" style={{
                            height: "100%",
                            width: "100%",
                        }} className="image" />
                        </Col>
                        <Col>
                        <Card.Body>
                            <Card.Title className="cardTitle"></Card.Title>
                            <Card.Text>
                                <p>Hi, my name is Mira. I am a full stack software engineer with a background in the Pharmaceutical Industry. I recently graduated from the Software Engineering Immersive Flex program at General Assembly, where I developed skills in Javascript, React, Python, Django and many other technical skills. During the course I built four projects over the course of 6 months. </p>
                            <hr/>
                            <h5>My skills</h5>

                            </Card.Text>
                        </Card.Body>
                        </Col>
                        </Row>
                    </Card>

                </Modal.Body>


            </Modal>

            <Modal show={show.experience} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="projectArea">
                        {projectsArr.map((object, arrayIdx) => {
                            return (
                                <Card key={arrayIdx} style={{ width: "20rem" }} >
                                    <Card.Img variant="top" src={object.image} style={{
                                        height: "15.5rem",
                                        width: "20rem",
                                    }} className="image" />
                                    <Card.Body>
                                        <Card.Title className="cardTitle">{object.name}</Card.Title>
                                        <Card.Text>
                                            <div>Description: {object.description}</div>
                                            <div>Technologies: {object.technologies}</div>
                                            <Button variant="secondary">
                                                <a href={object.github} target="_blank">Check Code</a>

                                            </Button>
                                            <Button variant="secondary">
                                                <a href={object.viewProject} target="_blank">View Project</a>

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
                <Modal.Body>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" name="subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} name="message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                       
                    </Form>
                    
                                               

                                            
                    <a href="https://github.com/Mira85" target="_blank"><i class="bi bi-github"> </i></a>
                   <a href="https://www.linkedin.com/in/mira-makadia/" target="_blank">  <i class="bi bi-linkedin"></i></a>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Main;