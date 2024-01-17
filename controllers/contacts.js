const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// these match with endpoints in ./routes/contacts.js
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    }).catch();
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: userId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts[0]);
    }).catch();
};

// don't forget to export
module.exports = {
    getAll, 
    getSingle, 
    createUser, 
    updateUser, 
    deleteUser
};