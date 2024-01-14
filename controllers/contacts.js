const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    }).catch();
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contact[0]);
    }).catch();
};

module.exports = {
    getAll, 
    getSingle
};