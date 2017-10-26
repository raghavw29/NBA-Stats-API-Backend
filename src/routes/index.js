const express = require('express');
const mountAPI = require('./api');
const mountAuth = require('./auth');
const mountMain = require('./main');
var router = express.Router();
var path = require('path');

module.exports = addRoutes;

function addRoutes(router) {
    const api = express.Router(),
        auth = express.Router(),
        main = express.Router();
        //test = express.Router();
    mountAPI(api);
    mountAuth(auth);
    mountMain(main);

    router.use('/api', api);
    router.use('/auth', auth);
    router.use('/main', main);
};
