import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Reviews from './components/Reviews.jsx';

render(<Navbar />, document.getElementById('navbar'));
render(<ProductDetails />, document.getElementById('product-details'));
render(<Reviews />, document.getElementById('reviews'));