var express = require('express');
var WP = require( 'wordpress-rest-api' );
var wp = new WP({ endpoint: 'http://es.articles.dev/wp-json' });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  wp.posts().get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    res.render('index', { posts: data });
  });

});
router.get('/:slug.html', function(req, res) {
  wp.posts().slug(req.params.slug).embed().get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    res.render('post', { posts: data });
  });

});

module.exports = router;
