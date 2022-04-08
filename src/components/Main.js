import "./Main.css"
import React, { useRef } from 'react';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import projectsArr from "../data";
import emailjs from '@emailjs/browser';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Document, pdfjs, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


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



    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess() {
        setPageNumber(1);
    }

    return (

        <div className="intro" style={{ backgroundImage: "url(/images/background-print.png)" }} >

            <div className="introWrapper">

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
                    <div className="buttonsSmallScreenSize">
                            <Button className="button"  onClick={() => handleShow('about')}>About</Button>
                            <Button className="button"  onClick={() => handleShow('experience')}>Experience</Button>
                            <Button className="button"  onClick={() => handleShow('resume')}>Resume</Button>
                            <Button className="button"  onClick={() => handleShow('contact')}>Contact</Button>
                       
                    </div>

                </div>

                <div className="introRBox">
                    <div className="buttonsArea">
                        <div className="topButtons">
                            <Button className="button" style={{ height: "150px", width: "150px" }} onClick={() => handleShow('about')}>About</Button>
                            <Button className="button" style={{ height: "150px", width: "150px" }} onClick={() => handleShow('experience')}>Experience</Button>
                        </div>
                        <div className="bottomButtons" >
                            <Button className="button" style={{ height: "150px", width: "150px" }} onClick={() => handleShow('resume')}>Resume</Button>
                            <Button className="button" style={{ height: "150px", width: "150px" }} onClick={() => handleShow('contact')}>Contact</Button>
                        </div>
                    </div>

                </div>
                <Modal className="modalArea" show={show.about} onHide={handleClose}>

                    <Modal.Header className="modalHeader " closeButton closeVariant="white" >
                        <Modal.Title className="modalTitle">About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className="aboutWrapper">
                            <Card className="card" style={{ maxWidth: "90rem", maxHeight: "90rem" }}>
                                <Row className='no-gutters'>
                                    <Col md={5} lg={5}>
                                        <Card.Img variant="top" src="https://imgur.com/bpixhe9.png" style={{
                                            height: "100%",
                                            width: "100%",
                                        }} className="image" />
                                    </Col>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title className="cardTitle"></Card.Title>
                                            <Card.Text>
                                                <p>Hi, my name is Mira. I am a full stack software engineer with a background in the Pharmaceutical Industry. I recently graduated from the Software Engineering Immersive Flex program at General Assembly, where I developed skills in Javascript, React, Python, Django and many other technical skills. Over the course of 6 months, i built four projects. Details about them can be found in the experience section. </p>
                                                <p>My previous experience in the Pharmaceutical Industry as a senior formulation scientist has taught me to analyze and solve complex problems and bring value to the teams I work with. I am looking forward to my journey in tech industry where i can solve problems creatively using my inquisitive nature.</p>
                                                <hr />
                                                <h5>My skills:</h5>
                                                <div className="skills">
                                                    <button className="skills">HTML5</button>
                                                    <button className="skills">CSS</button>
                                                    <button className="skills">JavaScript</button>
                                                    <button className="skills">JQuery</button>
                                                    <button className="skills">Python</button>
                                                    <button className="skills">Django</button>
                                                    <button className="skills">React</button>
                                                    <button className="skills">Node.js</button>
                                                    <button className="skills">Express</button>
                                                    <button className="skills">Mongodb</button>
                                                    <button className="skills">PostgreSQL</button>
                                                    <button className="skills">Bootstrap</button>
                                                    <button className="skills">Materialize</button>
                                                    <button className="skills">Netlify</button>
                                                    <button className="skills">Heroku</button>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal className="modalArea" show={show.experience} onHide={handleClose}>
                    <Modal.Header className="modalHeader " closeButton closeVariant="white">
                        <Modal.Title className="modalTitle">Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className="projectArea">
                            {projectsArr.map((object, arrayIdx) => {
                                return (
                                    <Card className="projectCard" key={arrayIdx} style={{ width: "25rem" }} >
                                        <Card.Img variant="top" src={object.image} style={{
                                            height: "15.5rem",
                                            width: "25rem",
                                        }} className="image" />
                                        <Card.Body>
                                            <Card.Title className="cardTitle" style={{ color: '#E0AAFF', textAlign: 'center', fontSize: '24px' }}>{object.name}
                                            </Card.Title>
                                            <Card.Text>
                                                <div><b><span style={{ fontSize: '18px' }}>Description:</span></b> {object.description}</div>
                                                <div><b><span style={{ fontSize: '18px' }}>Technologies: </span></b>

                                                    {object.technologies.join(', ')}
                                                </div>
                                                <div className="projectBtnWrapper">
                                                    <Button className="projectBtns" variant="secondary">
                                                        <a className="projectAnchor" href={object.github} target="_blank" rel="noreferrer nofollow">Check Code</a>

                                                    </Button>
                                                    <Button className="projectBtns" variant="secondary">
                                                        <a className="projectAnchor" href={object.viewProject} target="_blank" rel="noreferrer nofollow">View Project</a>
                                                    </Button>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })};
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={show.resume} onHide={handleClose}>
                    <Modal.Header className="modalHeader " closeButton closeVariant="white">
                        <Modal.Title className="modalTitle">Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <Document className="resume" file={"resume.pdf"} onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </Modal.Body>
                </Modal>


                <Modal show={show.contact} onHide={handleClose}>
                    <Modal.Header className="modalHeader " closeButton closeVariant="white">
                        <Modal.Title className="modalTitle">Contact Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody contactBody">
                        <Form ref={form} onSubmit={sendEmail} className="contactForm">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="formLabel">Full Name</Form.Label>
                                <Form.Control className="formInput" type="text" name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="formLabel">Email</Form.Label>
                                <Form.Control className="formInput" type="email" name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="formLabel">Subject</Form.Label>
                                <Form.Control className="formInput" type="text" name="subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="formLabel">Message</Form.Label>
                                <Form.Control className="formInput" as="textarea" rows={5} name="message" />
                            </Form.Group>
                        </Form>
                        <div className="submitBtnWrapper">
                            <Button className="submitBtnForm" variant="primary" type="submit">
                                Send Message
                            </Button>
                        </div>
                        <div className="contactBtns">
                            <a href="https://github.com/Mira85" target="_blank" rel="noreferrer nofollow"><i className="bi bi-github" style={{ fontSize: '25px', color: '#E0AAFF' }}> </i></a>
                            <a href="https://www.linkedin.com/in/mira-makadia/" target="_blank" rel="noreferrer nofollow">  <i className="bi bi-linkedin" style={{ fontSize: '25px', color: '#E0AAFF' }}></i></a>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Main;