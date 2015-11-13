var express= require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/muchomojoDB');
mongoose.model('Player', new Schema({"name": String, "position": String, "starter": Boolean}, {collection: 'handshuckedcorn_roster'}));
var Person = mongoose.model('Player');

router.route('/')
    .get(function(req, res){
        //console.log("hi");
        Person.find({}, function(err, data){
            if(err) console.log("Error: ", err);
            //console.log("on the other side");
            res.send(data);
        });
    });


module.exports = router;