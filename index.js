'use strict'

require('dotenv').config(); 
const {makeExecutableSchema} = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const router = express.Router();
const {readFileSync} = require('fs');
const {join} = require('path');
const resolvers = require('./lib/resolvers')
const database = require('./lib/database')
app.use(router);


//definiendo schema
//Propiedad del objeto que lee los schemas
const typeDefs = readFileSync(
        join(__dirname, 'lib', 'schema.graphql'), 'utf-8'
        );

const schema = makeExecutableSchema({typeDefs, resolvers});

//Ejecutar las queries
// graphql(schema, '{ hello, saludo }', resolvers)
// .then((data) => {
//     console.log(data);
// });

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

database();

app.listen(3000, () => {
    console.log('Api escuchando en http://localhost:3000');
});