const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const collection = db.collection('comunidades');

exports.createComunidade = async (req, res) => {
  try {
    const doc = await collection.add(req.body);
    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllComunidades = async (req, res) => {
  try {
    const snapshot = await collection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getComunidadeById = async (req, res) => {
  try {
    const doc = await collection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updateComunidade = async (req, res) => {
  try {
    await collection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deleteComunidade = async (req, res) => {
  try {
    await collection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};
