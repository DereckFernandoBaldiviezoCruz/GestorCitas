const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./database/database'); // Importa la instancia de Sequelize

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas API
app.use('/api', routes);

// Sincronización de la base de datos
sequelize.sync({ alter: true }) // Opciones: alter, force, etc.
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
