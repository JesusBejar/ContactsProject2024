const express = require('express');
const router  = express.Router();
const contactsController = require('../controllers/contacts');
// these match with functions in ./controllers/contacts.js
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
// CREATE
router.post('/', contactsController.createUser)
// UPDATE
router.put('/', contactsController.updateUser)
// DELETE
router.delete('/', contactsController.deleteUser)


module.exports = router;

