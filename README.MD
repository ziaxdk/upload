## This small server accepts uploads from HTTP POST

## Requirements

### Nodejs

Node V4.03, NPM v2.15.1

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
curl -i -F ziax=@[filename_here] http://localhost:3000/upload

```

## License

[MIT](LICENSE)