// create a new user
db.createUser({
  user:'fazt',
  pwd: '1234',
  roles: ["readWrite", "dbAdmin"]
});

// login with a user
use databasename;

db.auth("fazt", "1234");
