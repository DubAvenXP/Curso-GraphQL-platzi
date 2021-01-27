'use strict'

const {buildSchema} = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const router = express.Router();
const {readFileSync} = require('fs');
const {join} = require('path');
const resolvers = require('./lib/resolvers')
app.use(router);


//definiendo schema

const schema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'), 'utf-8'
        )
);



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


app.listen(3000, () => {
    console.log('Api escuchando en http://localhost:3000');
});