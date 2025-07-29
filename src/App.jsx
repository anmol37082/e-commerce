import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import CategoryProducts from './pages/CategoryProducts';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
