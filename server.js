import express from 'express'
import bodyParser from 'body-parser'
import router from './routes';
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(8080, function () {
  console.log('Parby Warker app listening on port 8080!')
});