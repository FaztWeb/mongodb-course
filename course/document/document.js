// documents are ordered set of keys and values
// is similar to map, hash or dictionary on other
// languages. in javascript are objects

// is the equivalent of a row in sql

// this is a simple document
{ "greeting": "Hello world!"}

//documents can be more that just one pair key:value
// of javascript types as String and number
{"greeting": "Hello world!", "foo": 3}

// documents keys are strings
// any character is allowed with few exeptions
// 1. keys must not contain the character \0. that is used to signify
// the end of the key
// 2. the . and $ have special properties

// Mongodb is type-sensitive and case sensitive
{"foo": 3}
{"foo": "3"}

// a document can not contain a duplicate key
{"greeting": "Hello world!", "greeting": "Hello Mongodb!"}

// key value pairs are ordered in this way
{"x": 1, "y": 2}
// so don't design your schema depending on order of fields
