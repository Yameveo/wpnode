var express = require('express');
var WP = require( 'wordpress-rest-api' );
var wp = new WP({ endpoint: 'http://articles.dev:8000/wp-json' });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  wp.posts().get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    res.render('index', { posts: data });
    data.forEach(function(post) {
        console.log(post);
    });
  });

});
router.get('/:slug.html', function(req, res) {
  console.log(req.params.slug);
  wp.posts().slug(req.params.slug).get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    console.log(data);
    res.render('post', { posts: data });
  });

});

module.exports = router;
