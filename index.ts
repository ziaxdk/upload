import * as Express from 'express';
import * as Multer from 'multer';

var storage = Multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

