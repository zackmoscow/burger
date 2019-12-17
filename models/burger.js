const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    
    create: function(data, cb) {
      orm.insert(data, function(res) {
        cb(res);
      });
    },

    update: function(devoured, condition, cb) {
      orm.update(devoured, condition, function(res) {
        cb(res);
      });
    },
};
  
module.exports = burger;