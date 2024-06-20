const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./database/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', routes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
