var path = require('path');

module.exports = function mountMain(router) {
    router.get('/', (req, res) => res.sendFile(path.join(__dirname, "../../", 'views', 'index.html')));
};
