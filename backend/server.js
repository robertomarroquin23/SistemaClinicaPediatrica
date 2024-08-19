const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/sistema-clinica', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Iniciar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
