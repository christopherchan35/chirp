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
  })

router.route('/posts/:id')
  // return a particular post
  .get(function(req, res){
    res.send({message: 'TODO return post with ID ' + req.params.id});
  })

  // update existing post
  .put(function(req, res){
    res.send({message: 'TODO modify post with ID ' + req.params.id});
  })

  // delete existing post
  .delete(function(req, res){
    res.send({message: 'TODO delete post with ID ' + req.params.id});
  })

module.exports = router;
