import * as Express from 'express';
import * as Multer from 'multer';

let uploadPath = process.env.uploadPath || './uploads';
let port = process.env.port || 3000;

var storage = Multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = Multer({ storage: storage })

var app = Express();

app.post('/upload', upload.single('ziax'), function(req, res, next) {
  res.sendStatus(200);
});

app.listen(port, function() {
  console.log('Server running on port %s and will use %s as folder', port, uploadPath);
});
