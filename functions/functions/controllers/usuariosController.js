const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const usuariosCollection = db.collection('usuarios');

exports.createUsuario = async (req, res) => {
  try {
    const doc = await usuariosCollection.add(req.body);
    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllUsuarios = async (req, res) => {
  try {
    const snapshot = await usuariosCollection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const doc = await usuariosCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    await usuariosCollection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await usuariosCollection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};