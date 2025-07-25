const express = require('express');
const router = express.Router();
const {
  addProperty,
  searchProperties
} = require('../controllers/property.controller');
const validateProperty = require('../validators/property.validator');

router.post('/properties', validateProperty, addProperty);
router.get('/properties/search', searchProperties);

module.exports = router;
