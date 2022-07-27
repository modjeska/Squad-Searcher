const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

const startApolloServer = async (typeDefs, resolvers) => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app }); // default path: /graphql

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`MERN server is running on ${PORT}`);
            console.log(`Apollor Server at http://localhost:${PORT}${apolloServer.graphqlPath}`);
        })
    })
}

startApolloServer(typeDefs, resolvers);
