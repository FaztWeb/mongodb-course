// INSERT A NEW DOCUMENT
db.customers.insert({
  "first_name": "Aaron",
  "last_name": "Swartz"
});

db.customers.insert(
  {"first_name": "Aaron", "last_name":"Swartz"},
  {"first_name": "Aron", "last_name": "Swartz"}
);

// SAVE AN OBJECT AS DOCUMENT
var articleInfo = {}
articleInfo.authorName = "Ryan Ray";
articleInfo.tags = ['database', 'network', 'computing'];
articleInfo.metadata = {};
articleInfo.metadata.authors = ['Ryan Ray', 'Joe McMillan']
articleInfo.metadata.description = "A new Database";
articleInfo.metadata.created = new Date();

db.articles.save(articleInfo);

// to read

db.customers.find({}).pretty();

// to update

db.customers.update({"first_name": "Aron"}, {
  "first_name": "Aron",
  "last_name": "Swartz",
  gender: "male"
});

// to delete
