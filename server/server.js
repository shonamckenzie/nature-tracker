const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('wildlife');
  const speciesCollection = db.collection('species');
  const speciesRouter = createRouter(speciesCollection);
  app.use('/api/species', speciesRouter);
})
.catch(console.err);

app.listen(3000, function(){
  console.log(`listening on port ${this.address().port}`);
});
