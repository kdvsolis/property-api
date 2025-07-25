const express = require('express');
const app = express();
const propertyRoutes = require('./routes/property.routes');
const logger = require('./middleware/logger');

app.use(logger);
app.use(express.json());
app.use('/api', propertyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
