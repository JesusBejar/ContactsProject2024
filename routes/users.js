const express = require('express');
const router  = require("express").Router();
const userController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);