const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    
    insert: function(value, cb) {
      orm.insert(value, function(res) {
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