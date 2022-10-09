import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/saurav-srivastava-4b71b5188/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Sauravionic" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/saurav.ionic/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://linktr.ee/sauravionic" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Email:- srivastava2000saurav@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}