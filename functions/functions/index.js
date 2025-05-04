const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

const comunidadeRoutes = require('./routes/comunidadeRoutes');
const desafiosRoutes = require('./routes/desafiosRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const postRoutes = require('./routes/postRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const comunidadesUsuariosRoutes = require('./routes/comunidadesUsuariosRoutes');
const usuariosDesafiosRoutes = require('./routes/usuariosDesafiosRoutes');

app.use('/comunidade', comunidadeRoutes);
app.use('/desafios', desafiosRoutes);
app.use('/eventos', eventosRoutes);
app.use('/post', postRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/comunidades_usuarios', comunidadesUsuariosRoutes);
app.use('/usuarios_desafios', usuariosDesafiosRoutes);

exports.api = functions.https.onRequest(app);
