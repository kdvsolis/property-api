const { properties } = require('../data/storage');
const { getAveragePrice, getPriceComparison } = require('../utils/price.utils');

exports.addProperty = (req, res) => {
  const { address, suburb, price, description } = req.body;
  if (!address || !suburb || !price || !description)
    return res.status(400).json({ error: 'Missing fields' });

  properties.push({ address, suburb, price, description });
  res.status(201).json({ message: 'Property added successfully' });
};

exports.searchProperties = (req, res) => {
  const { suburb } = req.query;
  const list = suburb ? properties.filter(p => p.suburb === suburb) : properties;
  const avgPrice = suburb ? getAveragePrice(suburb, properties) : null;

  const results = list.map(p => ({
    address: p.address,
    price: p.price,
    comparisonToAvg: getPriceComparison(p.price, avgPrice)
  }));

  res.json({ properties: results });
};
