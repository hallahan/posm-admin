var router = require('express').Router({ mergeParams: true });
var postManifest = require('./controllers/post-manifest');

router.route('/manifest').post(postManifest);

module.exports = router;
