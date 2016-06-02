import * as Express from 'express';
import * as Multer from 'multer';
import * as BasicAuth from 'basic-auth';

let uploadPath = process.env.uploadPath || './uploads';
let port = process.env.port || 3000;
let username_ = process.env.user || 'user';
let password_ = process.env.pass || 'pass';

/* Multer */
let storage = Multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

let upload = Multer({ storage: storage })

/* BasicAuth */
var auth = function(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = BasicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === username_ && user.pass === password_) {
    return next();
  } else {
    return unauthorized(res);
  };
};

/* Express */
let app = Express();

app.post('/upload', auth, upload.single('ziax'), function(req, res, next) {
  res.sendStatus(200);
});


app.listen(port, function() {
  console.log('Server running on port %s and will use "%s" as folder and "%s" as user', port, uploadPath, username_);
});

