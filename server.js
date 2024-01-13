// below is lean code for a server
const express = require('express');
const app = express();

app.get('/', (req, res) =>(
    res.send('Hola Mundo!')
));

const port = 3000;
app.listen(process.env.port || port);
console.log('Server is listening at port ' + (process.env.port || port));