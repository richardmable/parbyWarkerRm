import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes';

let app = express();

// enable cors
let corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// enable body parser for parsing the body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

// serve the app!
app.listen(8080, function () {
  console.log('Parby Warker app listening on port 8080!')
});