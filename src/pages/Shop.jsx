import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { FaSearch, FaStar, FaFilter, FaShoppingCart } from 'react-icons/fa';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 3799,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'electronics',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 4999,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'electronics',
      inStock: true
    },
    {
      id: 3,
      name: 'Cotton T-Shirt',
      price: 799,
      rating: 4.0,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'clothing',
      inStock: true
    },
    {
      id: 4,
      name: 'Ceramic Coffee Mug',
      price: 299,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'home',
      inStock: false
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 2499,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'electronics',
      inStock: true
    },
    {
      id: 6,
      name: 'Leather Wallet',
      price: 1299,
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'accessories',
      inStock: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = ['all', 'electronics', 'clothing', 'home', 'accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <Container className="shop-container py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="display-5 fw-bold text-center">Our Products</h1>
          <p className="text-muted text-center">Discover amazing products at great prices</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={3} className="mb-3 mb-md-0">
          <Form.Select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Range
            min="0"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
          <small className="text-muted">Max Price: ₹{priceRange[1]}</small>
        </Col>
      </Row>

      <Row className="g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col key={product.id} lg={4} md={6}>
              <Card className="h-100 product-card shadow-sm">
                <div className="product-image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  {!product.inStock && (
                    <div className="out-of-stock-badge">
                      Out of Stock
                    </div>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title>{product.name}</Card.Title>
                    <Badge bg="secondary" className="text-capitalize">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(product.rating) ? '#ffc107' : '#e4e5e9'}
                      />
                    ))}
                    <span className="ms-2 text-muted">({product.rating})</span>
                  </div>
                  <Card.Text className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="price fw-bold">₹{product.price.toLocaleString()}</span>
                      <Button 
                        variant="primary" 
                        size="sm"
                        disabled={!product.inStock}
                      >
                        <FaShoppingCart className="me-1" /> Add to Cart
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No products found matching your criteria</h4>
            <Button 
              variant="outline-primary" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 10000]);
              }}
            >
              Reset Filters
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Shop;