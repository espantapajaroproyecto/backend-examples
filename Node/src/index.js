const express = require('express');
const mongoose = require('mongoose');
const materiasRouter = require('./routes/materias');

const app = express();
app.use(express.json());


console.log();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(err));

app.use('/materias', materiasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
