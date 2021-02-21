import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Accordion from "react-bootstrap/Accordion";

// Projects
import L_ChatApp from '../../assets/img/projects/Chat-App.png';
import L_VpnApp from '../../assets/img/projects/Vpn-App.gif';
import L_WeatherApp from '../../assets/img/projects/Weather-App.png';

// skills
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";

import './project-timeline.css';

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
      <CardDeck>
      <Col>
      <Row md={3} style={{margin: 5}}>
            <div>
              <Accordion>
                <Card style={{ padding: 5}}>
                  <Card.Title  className="text-center">Chat Website</Card.Title>
                  <Card.Img variant="top" src={L_ChatApp} />
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" style= {{margin: 5}}>
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The website is a chat website where we can make groups and chat with our friends and family
                        members.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Chatting Website</li>
                          <li>Powered by React</li>
                          <li>Share location</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node js" rounded className="image-style1 m-1"></Image>{" "}
                                Node js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express js" rounded className="image-style1 m-1"></Image>{" "}
                                Express js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML" rounded className="image-style1 m-1"></Image>{" "}
                                HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS" rounded className="image-style1 m-1"></Image>{" "}
                                CSS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="d-flex justify-content-between flex-nowrap text-center" style={{padding:5}}>
                      <Button size="sm" href="https://avi-chat-app.herokuapp.com" target="_blank">
                        SEE LIVE
                      </Button>
                      <Button size="sm" href="https://github.com/AviBansal005/Nodejs-Chat-website" target="_blank">
                        SOURCE CODE
                      </Button>
                    </div>
                  </Card>
                </Accordion>        
              </div>
              <div>
              <Accordion>
                <Card style={{ padding: 5}}>
                  <Card.Title  className="text-center">Vpn Website</Card.Title>
                  <Card.Img variant="top" src={L_VpnApp} />
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" style= {{margin: 5}}>
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The website asks you for a website url which is blocked in your current location and helps in
                        accessing it similar to a Vpn.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Vpn Website</li>
                          <li>Powered by React</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node js" rounded className="image-style1 m-1"></Image>{" "}
                                Node js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express js" rounded className="image-style1 m-1"></Image>{" "}
                                Express js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML" rounded className="image-style1 m-1"></Image>{" "}
                                HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS" rounded className="image-style1 m-1"></Image>{" "}
                                CSS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="d-flex justify-content-between flex-nowrap text-center" style={{padding:5}}>
                      <Button size="sm" href="https://github.com/AviBansal005/Nodejs-Vpn" target="_blank">
                        SOURCE CODE
                      </Button>
                    </div>
                  </Card>
                </Accordion>        
              </div>
              <div>
              <Accordion>
                <Card style={{padding: 5}}>
                  <Card.Title  className="text-center">Weather Website</Card.Title>
                  <Card.Img variant="top" src={L_WeatherApp} />
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main" style= {{margin: 5}}>
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The website asks you for a location whose weather you have to determine.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Weather Website</li>
                          <li>Powered by React</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node js" rounded className="image-style1 m-1"></Image>{" "}
                                Node js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express js" rounded className="image-style1 m-1"></Image>{" "}
                                Express js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML" rounded className="image-style1 m-1"></Image>{" "}
                                HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS" rounded className="image-style1 m-1"></Image>{" "}
                                CSS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="d-flex justify-content-between flex-nowrap text-center" style={{padding:5}}>
                      <Button size="sm" href="https://github.com/AviBansal005/Nodejs-Vpn" target="_blank">
                        SOURCE CODE
                      </Button>
                    </div>
                  </Card>
                </Accordion>        
              </div>
            </Row>
          </Col>
        </CardDeck>
      </div>
  );        
};
        
export default Skills;
