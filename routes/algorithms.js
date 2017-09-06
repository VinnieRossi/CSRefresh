const express = require('express');
const router = express.Router();
const firebase = require('firebase');


// Get single algorithm page
router.get('/:title', (req, res, next) => {
    // Haha this is dumb. Figure out how firebase can handle url encoding
    const titleSpaces = (req.params.title).replace('%20', ' ');
    
    return firebase.database().ref().child('algorithms').child(titleSpaces).once('value', snapshot => {
      res.json(snapshot.val()).status(200);
    });
});

// Get all algorithm pages
router.get('/', (req, res, next) => {
    return firebase.database().ref().child('algorithms').once('value', snapshot => {
      res.json(snapshot.val()).status(200);
    });
});


module.exports = router;