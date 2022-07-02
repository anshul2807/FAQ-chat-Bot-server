# This is a FAQ Chat Bot Server

You need to create .env file --
```
DB_ENDPOINT=<Your_mongo_Server>
PORT=<any_port_you_want>
PRIVATE_KEY=<whatever_you_want>
```


## To Install all dependencies
```
npm install
```

## To install dev-dependencies
```
npm install nodemon --save-dev
```

## To start the server
```
npm run devStart
```

### If you are facing error regarding PORT already in use??

```
npm install kill-port -g
npx kill-port <PORT_NUMBER_YOU_WANT_TO_KILL>
```