const express = require('express');
const router  = express.Router();
const contactsController = require('../controllers/contacts');
const validator = require('../middleware/validate');

// these match with functions in ./controllers/contacts.js
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
// saveContact function is found in validate.js file
// CREATE
router.post('/', validator.saveContact, contactsController.createUser)
// UPDATE
router.put('/:id', validator.saveContact, contactsController.updateUser)
// DELETE
router.delete('/', contactsController.deleteUser)


module.exports = router;

