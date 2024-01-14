const router  = require("express").Router();

router.get('/', (req, res) => {res.send('Hola Mundo?');});

router.use('./contacts', require('./contacts'));

module.exports = router;