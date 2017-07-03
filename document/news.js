/*
un documento representando una noticia de un
sitio social, compuesto por:
  - propiedades: valores
  - los valores tienen tipos de datos como:
    - numbers, string, array, date or Other Object/Document
  - podemos tener una estructura jerarquica customizada
*/

{
  _id: ObjectID('4bd9e8e17cefd644108961bb'),
  title: 'Aventuras en las Bases de Datos',
  url: 'http://example.com/databases.txt',
  author: 'Fazt',
  vote_count: 20,
  tags: ['base de datos', 'mongodb', 'indexado'],
  image: {
    url: 'http://example.com/db.jpg',
    caption: 'Mi imagen asombrosa',
    type: 'jpg',
    size: 12313,
    data: 'Binary'
  },
  comments: [
    {
      user: 'jesus123',
      text: 'articulo interesante'
    },
    {
      user: 'blogger2',
      text: 'otro articulo relacionado que encontre e http://www.miarticle.com'
    }
  ]
}

/*
  a diferencia de una BD SQL, vemos que:
  - el codigo crea la estructura no la base de datos
*/
