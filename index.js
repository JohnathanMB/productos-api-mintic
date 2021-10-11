'use strict'

const app = require('./app');
const config = require('./config');

app.listen(config.port, ()=> {
    console.log(`Dirname: ${__dirname}`);
    console.log(`Api Rest corriendo en http://localhost:${config.port}`)
});