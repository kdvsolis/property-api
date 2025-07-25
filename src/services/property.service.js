// property.service.js
const { getAveragePrice, getPriceComparison } = require('../utils/price.utils');

function getSearchResults(properties, suburb) {
  const list = suburb ? properties.filter(p => p.suburb === suburb) : properties;
  const avgPrice = suburb ? getAveragePrice(suburb, properties) : null;

  return list.map(p => ({
    address: p.address,
    price: p.price,
    comparisonToAvg: getPriceComparison(p.price, avgPrice)
  }));
}

module.exports = { getSearchResults };
