var express = require('express');
var router = express.Router();
const firebase = require('firebase');


// Get single blog
router.get('/:title', (req, res, next) => {
    // Haha this is dumb. Figure out how firebase can handle url encoding
    const titleSpaces = (req.params.title).replace('%20', ' ');
    
    return firebase.database().ref().child(titleSpaces).once('value', snapshot => {
      res.json(snapshot.val()).status(200);
    });
});

// Get all blogs
router.get('/', (req, res, next) => {
    return firebase.database().ref().once('value', snapshot => {
      res.json(snapshot.val()).status(200);
    });
});


module.exports = router;