// is a group of documents
// is equivalend of a table in SQL

// have dynamic squemas
// means the documents can be different inside of a collection
// for example this could be stored in a single collection
{"greeting": "Hello World"}
{"foo": 5}
// these documents have diferent keys and value types

// callection restrictions are:
// empy string "" is not valid as a name collection
// collection names may not be contain \0
// no create collection that start with: symstem. (it's reserved for internal collections)
// not use $ as a name

// SUBCOLLECTIONS
// usefull to separated by names
blog.posts
blog.users
// these are different collections, and just used
// with organizational purpouse
// also usefull for GRIDFS nad drivers
