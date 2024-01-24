const req = require('express/lib/request');
const res = require('express/lib/response');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// these match with endpoints in ./routes/contacts.js
const getAll = async (req, res) => {
    console.log(mongodb);
    // #swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    }).catch();
};

const getSingle = async (req, res) => {
    // #swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Contacts').find({ _id: userId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts[0]);
    }).catch();
};
// add userId objects to update and delete functions!!!
// const userId = new ObjectId(req.params.id);
// arrow = anonymous
const createUser = async () => {
    // #swagger.tags=['Contacts']
    // execution
    const user = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favColor : req.body.favColor,
    bday : req.body.bday
    };
    const response = await mongodb.getDatabase().db().collection('Contacts').insertOne({_id: userId}, user);
    // execution check
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else{
        // 401 = unauthorized
        res.status(401).json(response.error || "You done messed up AAron!");
    }
};
const updateUser = async () => {
    // #swagger.tags=['Contacts']
    // execution
    const userId = new ObjectId(req.params.id);
    const user = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favColor : req.body.favColor,
    bday : req.body.bday
    };
    const response = await mongodb.getDatabase().db().collection('Contacts').replaceOne({_id: userId}, user);
    // execution check
    if(response.acknowledged > 0){
        res.status(204).send();
    }
    else{
        // 403 = Forbidden
        res.status(403).json(response.error || "You done messed up AAron!");
    }
};
const deleteUser = async () => {
    // #swagger.tags=['Contacts']
    // execution
    const userId = new ObjectId(req.params.id);
    const user = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favColor : req.body.favColor,
    bday : req.body.bday
    };
    const response = await mongodb.getDatabase().db().collection('Contacts').deleteOne({_id: userId});
    // execution check
    if(response.deletedCount > 0){
        res.status(204).send();
    }
    else{
        // 400 = bad request
        res.status(400).json(response.error || "You done messed up AAron!");
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