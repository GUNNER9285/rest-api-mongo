var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/tgr2019test';
var collections = ['test'];
var option =  {"auth":{"user":"canet", "password":"tesatopgungtbnb"}};
var connect = mongojs(databaseUrl, collections, option);

module.exports = {
    connect: connect
};