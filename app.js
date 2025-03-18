const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Modèle de données
const DataSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const Data = mongoose.model('Data', DataSchema);

// Middleware pour parser le JSON
app.use(express.json());

// Endpoint pour écrire des données
app.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.send(newData);
});

// Endpoint pour lire des données
app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.send(data);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});