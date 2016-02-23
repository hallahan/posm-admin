
module.exports = function (req, res, next) {
    var manifest = req.body;
    res.status(200).json(manifest);    
};
