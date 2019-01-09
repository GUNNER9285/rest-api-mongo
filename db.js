var mongojs = require('mongojs');

var databaseUrl = 'mongodb://202.139.192.79/tgr2019test';
var collections = ['test'];
var option =  {"auth":{"user":"canet", "password":"tesatopgungtbnb"}};
var connect = mongojs(databaseUrl, collections, option);

module.exports = {
    connect: connect
};