import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Anmol's Store</h5>
            <p>
              Your one-stop shop for premium products at unbeatable prices.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="text-white me-3">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-white text-decoration-none">Shop</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/faq" className="text-white text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="text-white text-decoration-none">Shipping Policy</a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-white text-decoration-none">Return Policy</a>
              </li>
              <li>
                <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email" 
              />
              <button 
                className="btn btn-primary" 
                type="button"
              >
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Anmol's Store. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Payment Methods: <i className="bi bi-credit-card mx-1"></i>
              <i className="bi bi-paypal mx-1"></i>
              <i className="bi bi-currency-bitcoin mx-1"></i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;