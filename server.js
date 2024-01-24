// below is lean code for a server
const express = require('express');
const app = express();
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

// app.get('/', (req, res) => (
//     res.send('Hola Mundo!')
// ));
// 1st port (the 2nd is in swagger.js)
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// this is for testing
// allows cross origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// checks for traffic in routes/index.js
app.use('/', require('./routes'));

// catch all error handler (not specific)
process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `HA GOTTEM (caught exceptions): ${err}\n` + `Exception origin ${origin}`)
})
// body parser "allows us to read the body author request object"
mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }else {
        // listens for traffic on port 3000
        app.listen(port, () => {console.log("Db is listening and running on port " + port)});
        // app.listen(process.env.port || port);
        // console.log('Db is listening & server is listening at port ' + (process.env.port || port));
    }
});
