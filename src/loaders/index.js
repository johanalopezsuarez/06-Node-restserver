const ExpressServer = require('./server/expressServer');
const config = require('../config');

//const startServer = async() => {
    module.exports = async() => {

    const server = new ExpressServer();
    console.log('Express loaded');

    server.start();
    console.log(`########################################`);
    console.log(`Server listening on port: ${config.port}`);
    console.log(`########################################`);
}

//module.exports = startServer;