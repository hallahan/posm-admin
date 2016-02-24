var router = require('express').Router({ mergeParams: true });
var postManifest = require('./controllers/post-manifest');

router.route('/manifest').post(postManifest);

router.route('/gather').get(gather.all);
router.route('/gather-osm').get(gather.osm);
router.route('/gather-mbtiles').get(gather.mbtiles);

module.exports = router;
