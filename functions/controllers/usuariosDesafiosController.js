const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const usuariosDesafiosCollection = db.collection('usuarios_desafios');

exports.createUsuarioDesafio = async (req, res) => {
  try {
    const { desafio_ID, usuario_ID } = req.body;

   
    const existingRel = await usuariosDesafiosCollection
      .where('desafio_ID', '==', desafio_ID)
      .where('usuario_ID', '==', usuario_ID)
      .get();

    if (!existingRel.empty) {
      return res.status(400).send('Usuário já está associado a esse desafio');
    }

    const doc = await usuariosDesafiosCollection.add({
      desafio_ID,
      usuario_ID,
      data_aceita: new Date().toISOString(),
      status: 'em andamento', 
    });

    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllUsuariosDesafios = async (req, res) => {
  try {
    const snapshot = await usuariosDesafiosCollection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getUsuarioDesafioById = async (req, res) => {
  try {
    const doc = await usuariosDesafiosCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updateUsuarioDesafio = async (req, res) => {
  try {
    await usuariosDesafiosCollection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deleteUsuarioDesafio = async (req, res) => {
  try {
    await usuariosDesafiosCollection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};
