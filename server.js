const express = require('express');
const app = express();
const path = require('path');

// Define RESTAURANT object with menu items
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { id: 1, name: 'Quantum Quinoa Mushroom Burger', price: 13.00, rating: 4, category: 'mains', details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.' },
    { id: 2, name: 'Binary Berry Cheesecake', price: 10.11, rating: 3, category: 'desserts', details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.' },
    { id: 3, name: 'Recursive Rigatoni', price: 17.00, rating: 5, category: 'mains', details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.' },
    { id: 4, name: 'Pumpkin Pi Squared', price: 3.14, rating: 5, category: 'desserts', details: 'A delightful pumpkin dessert, squared and spiced to perfection.' },
    { id: 5, name: 'Fibonacci String Bean Fries', price: 11.23, rating: 5, category: 'sides', details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.' }
  ]
};

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where your view files are located
app.set('views', path.join(__dirname, 'views'));

// Serve the home page
app.get('/', (req, res) => {
  res.render('home', { RESTAURANT });
});

// Serve the full menu page
app.get('/menu', (req, res) => {
  res.render('menu', { RESTAURANT });
});

// Serve filtered menu based on category
app.get('/menu/:category', (req, res) => {
  const categoryParam = req.params.category;
  // Filter items based on category
  const filteredItems = RESTAURANT.menu.filter(item => item.category === categoryParam);
  // Render the category.ejs view with both RESTAURANT and filtered menu items
  res.render('category', { menuItems: filteredItems, RESTAURANT });
});

// Start the server
app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
