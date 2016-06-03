"use strict";
var Express = require('express');
var Multer = require('multer');
var BasicAuth = require('basic-auth');
var uploadPath = process.env.uploadPath || './uploads';
var port = process.env.port || 3000;
var username_ = process.env.user || 'user';
var password_ = process.env.pass || 'pass';
/* Multer */
var storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = Multer({ storage: storage });
/* BasicAuth */
var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    }
    var user = BasicAuth(req);
    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    if (user.name === username_ && user.pass === password_) {
        return next();
    }
    else {
        return unauthorized(res);
    }
};
/* Express */
var app = Express();
app.post('/upload', auth, upload.single('ziax'), function (req, res, next) {
    console.log('ok');
    res.sendStatus(200);
});
app.listen(port, function () {
    console.log('Server running on port %s and will use "%s" as folder and "%s" as user', port, uploadPath, username_);
});
