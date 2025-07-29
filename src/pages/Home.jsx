import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center py-5">
            <Col md={6} className="hero-content">
              <h1 className="display-4 fw-bold mb-4">Welcome to Anmol's Store</h1>
              <p className="lead mb-4">Discover premium products at unbeatable prices</p>
              <Button variant="primary" size="lg" href="/products" className="px-4 py-2">
                Shop Now
              </Button>
            </Col>
            <Col md={6} className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Happy shopper with bags"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <Container>
          <h2 className="text-center mb-5 section-title">Featured Products</h2>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 product-card">
                <div className="card-img-container">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Smart Watch"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Smart Watch Pro</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Track your fitness with our latest smart watch
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price fw-bold">₹4,999</span>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 product-card">
                <div className="card-img-container">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Wireless Headphones"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Wireless Headphones</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Premium sound quality with noise cancellation
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price fw-bold">₹3,799</span>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 product-card">
                <div className="card-img-container">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Smartphone"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Latest Smartphone</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    High performance smartphone with amazing camera
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price fw-bold">₹24,999</span>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4">Join Our Newsletter</h2>
          <p className="mb-4">Subscribe to get updates on new arrivals and special offers</p>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Your email address"
              className="form-control w-50 me-2"
            />
            <Button variant="light" className="px-4">
              Subscribe
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;