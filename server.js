// below is lean code for a server
const express = require('express');
const app = express();
const mongodb = require('./data/database');

app.get('/', (req, res) => (
    res.send('Hola Mundo!')
));
// checks for traffic in routes/index.js
app.use('/', require('./routes'));
// body parser "allows us to read the body author request object"
app.use(bodyParser.json());

const port = 3000;

mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }else {
        // listens for traffic on port 3000
        app.listen(process.env.port || port);
        console.log('Db is listening & server is listening at port ' + (process.env.port || port));
    }
});
