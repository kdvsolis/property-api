const { properties } = require('../data/storage');
const { getSearchResults } = require('../services/property.service');

exports.addProperty = (req, res) => {
  const { address, suburb, price, description } = req.body;
  if (!address || !suburb || !price || !description)
    return res.status(400).json({ error: 'Missing fields' });

  properties.push({ address, suburb, price, description });
  res.status(201).json({ message: 'Property added successfully' });
};

exports.searchProperties = (req, res) => {
  const { suburb } = req.query;
  const results = getSearchResults(properties, suburb);
  res.json({ properties: results });
};
