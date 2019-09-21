const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection){

  const router = express.Router();

  // INDEX

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      });
  });

  // SHOW

  router.get('/:id', (req, res) =>{
    const id = req.params.id;
    collection
      .findOne({_id: ObjectId(id)})
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      });

  })

  // UPDATE



  return router;
};

module.exports = createRouter;
