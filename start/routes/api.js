var express = require('express');
var router = express.Router();

router.route('/posts')

  // returns all posts
  // req comes from the client
  // res comes from the server
  .get(function(req, res){
    // temp solution before mongoDB
    res.send({message: 'TODO return all posts'});
  })

  .post(function(req, res){
    // temp solution
    res.send({message: 'TODO Create a new post'});
  });

module.exports = router;
