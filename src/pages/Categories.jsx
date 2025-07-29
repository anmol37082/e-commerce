import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Categories = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Shop by Categories</h1>
      <Row className="g-4">
        {categories.map((category) => (
          <Col key={category.id} md={3} sm={6}>
            <Link to={`/category/${category.slug}`} className="text-decoration-none">
              <Card className="h-100 category-card shadow-sm">
                <Card.Img variant="top" src={category.image} alt={category.name} />
                <Card.Body className="text-center">
                  <Card.Title>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;