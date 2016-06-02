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