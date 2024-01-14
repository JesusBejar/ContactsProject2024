const express = require('express');
const router  = require("express").Router();
const userController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);