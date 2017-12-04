// the client is the mongo shell

// to watch all databases
show dbs

// to see current databse selected
db

// to select or create a database
use mivirtualstore

// CRUD OPERATIONS
// TO CREATE

const post = {
  "title": "My first Post",
  "content": "Here is my blog post",
  "date": new Date()
}
// this generates an _id
db.blog.insert(post) // WriteResult({ "nInserted" : 1 })

// TO READ
db.posts.find() // to query all collections
db.posts.findOne() // to query a single collection

// TO UPDATE
// we need (criteria, newDocument)
const myNewPost = db.posts.findOne()
myNewPost.comments = [];
db.posts.update(
  {_id: ObjectId("5a2490f249c2a502853b7e7a")},
  myNewPost
) // this add comments: []

// TO REMOVE
db.posts.remove({title: "My first Post"})
