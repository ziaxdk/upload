## This small server accepts uploads from HTTP POST

## Requirements

### Nodejs V4.03, NPM v2.15.1
[NodeJs](http://www.nodejs.org)

### Typescript V1.8.10
```
npm install -g typescript
```
### Typings v1.04
```
npm install -g typings
```

## Installation
```
npm install
typings install
tsc
npm start
```

## Docker

```
docker pull ziaxdk/upload
docker run -it --rm --name upload -p 3000:3000 ziaxdk/upload
docker run -it --rm --name upload -p 80:80 -v /home/:/usr/src/app/uploads/ -e port=80 -e user=foo -e pass=bar ziaxdk/upload

```
## Upload to server with CURL

```
curl -i --user user:pass -F ziax=@[filename_here] http://localhost:3000/upload

```

### Todo

```
curl --upload-file [filename_here] http://localhost:3000/upload
```

[https://curl.haxx.se/docs/httpscripting.html#PUT]

## License

[MIT](LICENSE)