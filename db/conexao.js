const sqlite3 = require("sqlite3").verbose();

// open database in memory
exports.connect = new sqlite3.Database("./db/users.db", sqlite3.OPEN_READWRITE, err => {
  if (err) {
    return console.error(err);
  }
console.log("Connected");
});
