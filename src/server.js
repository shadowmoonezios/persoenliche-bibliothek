const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB-Verbindung
mongoose.connect('mongodb://localhost/persoenliche-bibliothek', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('API funktioniert!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});