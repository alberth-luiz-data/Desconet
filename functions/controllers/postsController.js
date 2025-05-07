const admin = require('firebase-admin');
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const postsCollection = db.collection('post');

exports.createPost = async (req, res) => {
  try {
    const doc = await postsCollection.add(req.body);
    res.status(201).json({ id: doc.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const snapshot = await postsCollection.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const doc = await postsCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Not found');
    res.json({ id: doc.id, ...doc.data() });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    await postsCollection.doc(req.params.id).update(req.body);
    res.send('Updated');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.deletePost = async (req, res) => {
  try {
    await postsCollection.doc(req.params.id).delete();
    res.send('Deleted');
  } catch (e) {
    res.status(500).send(e.message);
  }
};
