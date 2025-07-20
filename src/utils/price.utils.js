function getAveragePrice(suburb, list) {
  const filtered = list.filter(p => p.suburb === suburb);
  if (filtered.length === 0) return null;
  const total = filtered.reduce((sum, p) => sum + p.price, 0);
  return total / filtered.length;
}

function getPriceComparison(price, avg) {
  if (avg === null) return 'unknown';
  if (price > avg) return 'above';
  if (price < avg) return 'below';
  return 'equal';
}

module.exports = { getAveragePrice, getPriceComparison };
