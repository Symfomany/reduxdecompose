const express = require("express");
const expressGraphQL = require("express-graphql");
const server = express();
const cors = require("cors"); // For C.O.R.S. security (same origins)

const userSchema = require("./schemas/schema");
server.use(cors());

server.use(
  "/graphql",
  expressGraphQL({
    schema: userSchema,
    graphiql: true
  })
);

server.listen(4000, () => {
  console.log("Serveur en écoute sur le port 4000");
});
