# Cours GraphQL

## Links GraphQl

Documentation: https://graphql.org/learn/
Awesome GraphQL: https://github.com/chentsulin/awesome-graphql#lib-js
Express GraphQL: https://github.com/graphql/express-graphql

Apollo: https://www.apollographql.com/client/
Bind GraphQL data to your UI with one function call.
https://www.apollographql.com/docs/react/

Démo Playground:

https://graphql.github.io/swapi-graphql/?query=query%7B%0A%20%20allFilms%7B%0A%20%20%20%20films%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D

Interface:
https://legacy.graphqlbin.com/RVIn

```
query{
  allFilms{
    films{
      title
      director
      producers
      created
      releaseDate
      planetConnection{
        planets{
          name
        }
      }
    }
  }
}
```

### Parcours la documentation GraphQL: https://graphql.org/learn/

Learn Query:
https://graphql.github.io/learn/queries/

### Schéma

For complexe queries

![https://join-monster.readthedocs.io/en/latest/img/schema-graphql.png](https://join-monster.readthedocs.io/en/latest/img/schema-graphql.png)

![https://i.ytimg.com/vi/Tpf9kVE2AY8/maxresdefault.jpg](https://i.ytimg.com/vi/Tpf9kVE2AY8/maxresdefault.jpg)

![https://cdn-images-1.medium.com/max/736/0*e7JHLI_aEGLzP8f6.jpg](https://cdn-images-1.medium.com/max/736/0*e7JHLI_aEGLzP8f6.jpg)

![https://cdn-images-1.medium.com/max/2000/1*wADTEw0sygkpiIaVTeq47w.png](https://cdn-images-1.medium.com/max/2000/1*wADTEw0sygkpiIaVTeq47w.png)

![http://fnogatz.github.io/talks/wlp16-graphql/images/rest-vs-graphql.png](http://fnogatz.github.io/talks/wlp16-graphql/images/rest-vs-graphql.png)

1.  Installation de express, express-graphql et graphql

2.  Création de Server Express

3.  Personalisation de scripts nodemon

4.  Montrer l'API avec json-server, puis config sur packe.json
    http://localhost:3000/
    Ne pas oublier de redemarrer le serveur

5.  Faire des premiere requete query

6.  Faire des premieres mutations

```
  mutation{
    addUser(firstName: "Sylvain", age: 30, companyId: "2"){
      age
    }
  }
```

7.  Parler des relations entre Types Bidirectionnelles

8)  Parler des Alias de Requetes

```
query{
  micosoft: company(id: "1"){
    name,
    users{
      firstName
    }
  }

  apple: company(id: "2"){
    name,
    users{
      firstName
    }
  }
}
```

9.  parler des fragments de requetes

```
query{
  micosoft: company(id: "1"){
    ...detail
  }

  apple: company(id: "2"){
    ...detail
  }
}

fragment detail on Company{
  name,
  users{
      firstName
    }
}
```

GraphQl et Appollo

Image:
![https://cdn-images-1.medium.com/max/1196/1*_2BxhMhdozoM_oN1VruLsA.png](https://cdn-images-1.medium.com/max/1196/1*_2BxhMhdozoM_oN1VruLsA.png)

Documentation:

[https://www.apollographql.com/docs/react/advanced/boost-migration.html](https://www.apollographql.com/docs/react/advanced/boost-migration.html)
