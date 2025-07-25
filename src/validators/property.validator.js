function validateProperty(req, res, next) {
  const { address, suburb, price, description } = req.body;
  if (
    typeof address !== 'string' ||
    typeof suburb !== 'string' ||
    typeof price !== 'number' ||
    typeof description !== 'string'
  ) {
    return res.status(400).json({ error: 'Invalid input types' });
  }
  next();
}
module.exports = validateProperty;
