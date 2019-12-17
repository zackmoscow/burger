const connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        };
        arr.push(key + "=" + value);
      };
    };
  return arr.toString();
};

const orm = {
    all: function(cb) {
      const queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insert: function(data, cb) {
      const queryString = `INSERT INTO burgers (burger_name) VALUES (${data})`;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    
    update: function(devoured, condition, cb) {
      const sqlDevoured = objToSql(devoured);
      console.log(sqlDevoured);
      const queryString = `UPDATE burgers SET ${sqlDevoured} WHERE ${condition}`
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },  
};

module.exports = orm;