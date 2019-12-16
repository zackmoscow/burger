const connection = require("../config/connection.js");

const orm = {
    all: function(cb) {
      const queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insert: function(value, cb) {
      const queryString = `INSERT INTO burgers (burger_name) VALUES (${value});`
      connection.query(queryString, value, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    
    update: function(devoured, condition, cb) {
      const queryString = `UPDATE burgers SET ${devoured} WHERE ${condition}`
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },  
};

module.exports = orm;