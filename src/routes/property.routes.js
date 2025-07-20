const express = require('express');
const router = express.Router();
const {
  addProperty,
  searchProperties
} = require('../controllers/property.controller');

router.post('/properties', addProperty);
router.get('/properties/search', searchProperties);

module.exports = router;
