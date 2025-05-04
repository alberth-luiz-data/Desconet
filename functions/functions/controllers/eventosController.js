const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const eventosCollection = db.collection('eventos');

exports.createEvento = async (req, res) => {
  try {
    const doc = await eventosCollection.add(req.body);
    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllEventos = async (req, res) => {
  try {
    const snapshot = await eventosCollection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getEventoById = async (req, res) => {
  try {
    const doc = await eventosCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updateEvento = async (req, res) => {
  try {
    await eventosCollection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deleteEvento = async (req, res) => {
  try {
    await eventosCollection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};
