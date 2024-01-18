const req = require('express/lib/request');
const res = require('express/lib/response');
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
// add userId objects to update and delete functions!!!
// const userId = new ObjectId(req.params.id);
// arrow = anonymous
const createUser = async () => {
    // execution
    const user = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favColor : req.body.favColor,
    bday : req.body.bday
    };
    const response = await mongodb.getDatabase().db().collection('contacts').insertOne({_id: userId}, user);
    // execution check
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || "You done messed up AAron!");
    }
};
const updateUser = async () => {
    // execution
    const userId = new ObjectId(req.params.id);
    const user = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favColor : req.body.favColor,
    bday : req.body.bday
    };
    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: userId}, user);
    // execution check
    if(response.acknowledged > 0){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || "You done messed up AAron!");
    }
};
const deleteUser = async () => {
        // execution
        const userId = new ObjectId(req.params.id);
        const user = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favColor : req.body.favColor,
        bday : req.body.bday
        };
        const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: userId});
        // execution check
        if(response.deletedCount > 0){
            res.status(204).send();
        }
        else{
            res.status(500).json(response.error || "You done messed up AAron!");
        }
    };
// don't forget to export
module.exports = {
    getAll, 
    getSingle, 
    createUser, 
    updateUser, 
    deleteUser
};