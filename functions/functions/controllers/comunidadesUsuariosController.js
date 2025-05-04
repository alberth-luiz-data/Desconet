const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const comunidadesUsuariosCollection = db.collection('comunidade_usuarios');

exports.createComunidadeUsuario = async (req, res) => {
  try {
    const { comunidadeID, usuario_ID } = req.body;

    const existingRel = await comunidadesUsuariosCollection
      .where('comunidadeID', '==', comunidadeID)
      .where('usuario_ID', '==', usuario_ID)
      .get();

    if (!existingRel.empty) {
      return res.status(400).send('Usuário já está associado a essa comunidade');
    }

    const doc = await comunidadesUsuariosCollection.add({
      comunidadeID,
      usuario_ID,
      data_criacao: new Date().toISOString(),
    });

    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllComunidadesUsuarios = async (req, res) => {
  try {
    const snapshot = await comunidadesUsuariosCollection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getComunidadeUsuarioById = async (req, res) => {
  try {
    const doc = await comunidadesUsuariosCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updateComunidadeUsuario = async (req, res) => {
  try {
    await comunidadesUsuariosCollection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deleteComunidadeUsuario = async (req, res) => {
  try {
    await comunidadesUsuariosCollection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};
