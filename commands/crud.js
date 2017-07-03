// to create
db.customers.insert({
  "first_name": "Aaron",
  "last_name": "Swartz"
});

db.customers.insert(
  {"first_name": "Aaron", "last_name":"Swartz"},
  {"first_name": "Aron", "last_name": "Swartz"}
);

// to read

db.customers.find({}).pretty();

// to update

db.customers.update({"first_name": "Aron"}, {
  "first_name": "Aron",
  "last_name": "Swartz",
  gender: "male"
});

// to delete
