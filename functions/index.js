const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

const comunidadeRoutes = require('./routes/comunidade.js');
const desafiosRoutes = require('./routes/desafios.js');
const eventosRoutes = require('./routes/eventos.js');
const postRoutes = require('./routes/post.js');
const usuariosRoutes = require('./routes/usuarios.js');
const comunidadesUsuariosRoutes = require('./routes/comunidadesUsuarios.js');
const usuariosDesafiosRoutes = require('./routes/usuariosDesafios.js');

app.use('/comunidade', comunidadeRoutes);
app.use('/desafios', desafiosRoutes);
app.use('/eventos', eventosRoutes);
app.use('/post', postRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/comunidades_usuarios', comunidadesUsuariosRoutes);
app.use('/usuarios_desafios', usuariosDesafiosRoutes);

exports.api = functions.https.onRequest(app);
