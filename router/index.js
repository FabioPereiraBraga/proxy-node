const express =  require('express');
const router  = express.Router();
const db = require('../db');
const fake = require("fakerator");
const fakerator = fake("pt-BR");

router.get('/',(req, res, next) => {
    
    db.create(fakerator.names.name()).then(result => {

        db.all().then(result => {
            res.render('list', {
                list: result
            });
        });

    });
     
});

router.get('/:name',(req, res, next) => {

    db.create(req.params.name).then(result => {

        db.all().then(result => {
            res.render('list', {
                list: result
            });
        });

    });
     
});








module.exports = router;