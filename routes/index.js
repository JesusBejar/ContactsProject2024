const router  = require("express").Router();

router.use('/', require('./swagger'))
// router.get('/', (req, res) => {res.send('Hola Mundo?');});

// router.get('/', (req, res) => {
//     // #swagger.tags=['Hola Mundo?']
//     res.send('Hola Mundo!');
// });


router.use('/contacts', require('./contacts'));

module.exports = router;