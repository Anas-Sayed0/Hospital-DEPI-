import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroSection from "./HeroSection/HeroSection";
import ContactInfo from "./ContactSection/ContactInfo";
import ContactForm from "./ContactSection/ContactForm";
import MapSection from "./MapSection/MapSection";
import Footer from "./../../shared/Footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <HeroSection />
      <Container fluid>
        <div className="contact-container">
          <Row>
            <Col md={6} xs={12}>
              <ContactInfo />
            </Col>
            <Col md={6} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="full-width-map">
        <MapSection />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
