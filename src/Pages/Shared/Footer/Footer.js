import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  faFacebook,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-light pt-5">
        <Row className="justify-content-md-center">
          <Col xs="12" lg="5" className="mt-3 footer-title">
            <div className="text-center">
              <img
                style={{
                  height: "50px",
                }}
                src="https://i.ibb.co/K7hH6Tb/furniture-logo.png"
                alt=""
              />
            </div>
            <h5 className="text-center ms-2 my-3 text-black">
              &copy; {new Date().getFullYear()}{" "}
              <span style={{ color: "#EB7700" }}>Furniture</span> Warehouse. All
              right reserved.
            </h5>
          </Col>

          <Col xs="12" lg="2"></Col>

          <Col xs="12" lg="5" className="mt-3 mx-auto text-center pt-3">
            <Link to="/" className=" text-decoration-none footer-menu">
              Privacy Policy
            </Link>

            <Link to="/" className="text-decoration-none footer-menu">
              Terms and Conditions
            </Link>
            <Link to="/" className="text-decoration-none footer-menu">
              Refund and Returns Policy
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="4" className="mx-auto text-center p-2 mb-3">
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
