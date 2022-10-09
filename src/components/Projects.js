import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dumpy URL",
      description: "Url Shortening Service Developed in Spring Boot",
      imgUrl: projImg1,
      link: "https://github.com/Sauravionic/DumpyURL"
    },
    {
      title: "FastChat",
      description: "A 1v1 Fast, Anonymous and Easy Chat Application",
      imgUrl: projImg2,
      link: "https://github.com/Sauravionic/FastChat"
    },
    {
      title: "BookLess",
      description: "An undergoing spring boot based web application which will help its users buy books for free",
      imgUrl: projImg3,
      link: "https://github.com/Sauravionic/BookLess_BE"
    },
    {
      title: "Covid Tracker",
      description: "A spring boot web application that displays realtime covid cases and deaths around the globe",
      imgUrl: projImg4,
      link: "https://github.com/Sauravionic/Covid-Tracker"
    },
    {
      title: "Bill Splitter",
      description: "A bill splitter application based purely on HTML & CSS.",
      imgUrl: projImg5,
      link: "https://github.com/Sauravionic/Bill-Splitter"
    },
    {
      title: "Template Landing Page",
      description: "A template landing page based purely on HTML & CSS",
      imgUrl: projImg6,
      link: "https://github.com/Sauravionic/Template_Landing_page"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Work with me so that your projects can be displayed here</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Work with me so that your projects can be displayed here</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}