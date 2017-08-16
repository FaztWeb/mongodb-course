show dbs

use mycustomers

db.createUser({
  user: 'fazt',
  pwd: '123',
  roles: ['readWrite', 'dbAdmin']
});

db.createCollection('customers')

show collections

db.customers.insert(
  {
    firstName: 'Isaac',
    lastName: 'Asimov'
  }
)

db.customers.find()
  .pretty()

db.customers.insert(
  [
    {firstName: 'Joe', lastName: 'MacMillan'},
    {firstName: 'Elena', lastName: 'Soraya'},
    {firstName: 'Isaac', lastName: 'delahaye'}
  ]
)

db.customers.find();
db.customers.find({firstName: 'Joe'}, {firstName: true, lastName:false});

// replace or update data
db.customers.update(
  {firstName: 'Joe'}, //query
  {
    firstName: 'Joe',
    lastName: 'MacMillan',
    gender: 'male'
  } // new data
);

// add a new date
db.customers.update(
  {firstName: 'Isaac'},
  {
    $set: {gender: 'male'}
  }
);

db.customers.update(
  {firstName: 'Isaac'},
  {
    $set: {age: 45}
  }
);
db.customers.update(
  {firstName: 'Isaac'},
  {
    $inc: {age: 5}
  }
);

db.customers.update(
  {firstName: 'Isaac'},
  {
    $unset:  {age: 1}
  }
)

db.customers.update(
  {firstName: 'Elena'} ,
  {
    firstName: 'Elena',
    lastName: 'Soraya'
  },
  { upsert: true}
)

db.customers.update(
  {firstName: 'Isaac'},
  {
    $rename: {"gender": "sex"}
  }
)

db.customers.remove({firstName: "Isaac"})
db.customers.remove({firstName: "Isaac"}, {justOne: true})

db.customers.find({firstName: "Elena"});
db.customers.find({$or: [{firstName: "Elena"}, {firstName: "Isaac"}]})
db.customers.fid({gender: "male"})

db.customers.find({age: {$lt: 40}})
db.customers.find({age: {$gt: 40}})
db.customers.find({age: {$gt: 30, $lt: 90}});

db.customers.find({"address.city": "Boston"})

db.customers.find({name: {$regex: 'ston'}});

// sorting
db.customers.find().sort({lastName: 1});
db.customers.find().sort({lastName: -1});
db.customers.find().count()
db.customers.find({gender: "male"}).count()
db.customers.find().limit(4)
db.customers.find().limit(4).sort({lastName: -1})

db.customers.find().forEach(function(doc) {
  print("Customer Name" + doc.firstName);
});
