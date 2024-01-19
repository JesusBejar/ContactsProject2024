const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Contacts API",
        description: "Made 2024 in the CSE341 class"
    },
    host: "locahost:3000",
    schemes: ["https"]
};
const outputfile = './swagger.json';
const endpointsfile = ['./routes/index.js'];

swaggerAutogen(outputfile, endpointsfile, doc);