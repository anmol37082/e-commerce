import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Image } from 'react-bootstrap';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { categories } from '../data/categories';
import { products } from '../data/products';

const CategoryProducts = () => {
  const { slug } = useParams();
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Find category with validation
    const foundCategory = categories.find(cat => cat.slug === slug) || null;
    setCategory(foundCategory);

    // Process products with safety checks
    const processedProducts = products.map(product => ({
      ...product,
      subcategory: product.subcategory || 'uncategorized',
      rating: product.rating || 0,
      price: product.price || 0
    }));

    const filtered = processedProducts.filter(product => {
      const matchesCategory = product.category === slug;
      const matchesSubcategory = activeSubcategory === 'all' || 
                               product.subcategory === activeSubcategory;
      return matchesCategory && matchesSubcategory;
    });
    
    setFilteredProducts(filtered);
    setIsLoading(false);
  }, [slug, activeSubcategory]);

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (!category) {
    return (
      <Container className="py-5 text-center">
        <h2>Category not found</h2>
        <Button variant="primary" href="/" className="mt-3">
          Go to Home
        </Button>
      </Container>
    );
  }

  const formatSubcategory = (subcat) => {
    if (!subcat) return 'Uncategorized';
    return String(subcat).replace(/-/g, ' ');
  };

  return (
    <Container className="py-4">
      {/* Category Banner */}
      {category.banner && (
        <div className="mb-5 rounded overflow-hidden">
          <Image 
            src={category.banner} 
            alt={category.name}
            fluid
            className="banner-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">{category.name}</h1>
        <Badge bg="secondary" className="fs-6 px-3 py-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        </Badge>
      </div>

      {/* Subcategory Filter */}
      {category.subcategories?.length > 0 && (
        <div className="mb-5">
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant={activeSubcategory === 'all' ? 'dark' : 'outline-dark'}
              size="sm"
              onClick={() => setActiveSubcategory('all')}
            >
              All Items
            </Button>
            {category.subcategories.map(sub => (
              <Button
                key={sub}
                variant={activeSubcategory === sub ? 'dark' : 'outline-dark'}
                size="sm"
                className="text-capitalize"
                onClick={() => setActiveSubcategory(sub)}
              >
                {formatSubcategory(sub)}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <Row className="g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col key={product.id} xl={3} lg={4} md={6}>
              <Card className="h-100 product-card border-0 shadow-sm hover-shadow">
                <div className="product-image-container ratio ratio-1x1">
                  <Card.Img 
                    variant="top" 
                    src={product.image}
                    alt={product.name}
                    className="product-image object-fit-contain p-3"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-product.png';
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column pt-3">
                  <Card.Title className="fs-6 mb-2 text-truncate">
                    {product.name}
                  </Card.Title>
                  <Badge bg="light" text="dark" className="mb-3 text-capitalize w-fit">
                    {formatSubcategory(product.subcategory)}
                  </Badge>
                  <div className="d-flex align-items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(product.rating) ? '#ffc107' : '#e4e5e9'}
                        size={14}
                      />
                    ))}
                    <span className="ms-2 text-muted small">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="price fw-bold fs-5">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <Button variant="primary" size="sm" className="px-3">
                      <FaShoppingCart className="me-1" /> Add
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No products found in this category</h4>
            <Button 
              variant="outline-primary" 
              onClick={() => setActiveSubcategory('all')}
              className="mt-3"
            >
              Show All Items
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryProducts;