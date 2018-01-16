// create a collection
db.createCollection('articles');

// to delete a collection
db.articles.drop();

// have DYNAMIC SQUEMAS
// means the documents can be different inside of a collection
// for example this could be stored in a single collection
{"greeting": "Hello World"}
{"foo": 5}

// so why we need to separate collections
// Keeping different kinds of documents in the same collection can be a nightmare
// we need to make sure that each query is only returning documents of a certain type or that the application code performing a
// • It is much faster to get a list of collections than to extract a list of the types in a  collection. For example, if we had a "type" field in each document that specified whether the document was a “skim,” “whole,” or “chunky monkey,” it would be much
// slower to find those three values in a single collection than to have three separate collections and query the correct collection.
// • Grouping documents of the same kind together in the same collection allows for
// data locality. Getting several blog posts from a collection containing only posts will
// likely require fewer disk seeks than getting the same posts from a collection con‐
// taining posts and author data.
// • We begin to impose some structure on our documents when we create indexes.
// (This is especially true in the case of unique indexes.) These indexes are defined per
// collection. By putting only documents of a single type into the same collection, we
// can index our collections more efficiently.

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
