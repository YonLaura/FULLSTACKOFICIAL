// src/services/production/api.js
// API/SERVICE.JS contains functions that interact with the backend

import axios from 'axios';

// The API URL, base of our API
const API_URL = "http://localhost:3001/api/products";

// Function to get all products
export const getProducts = () => axios.get(API_URL);

// Function to get a product by its ID
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);

// Function to create a new product
export const createProduct = (product) => axios.post(API_URL, product);

// Function to update a product
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);

// Function to delete a product
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);