const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// const { getOpenTripMapData } = require('./routes/openTripMap');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//OpenTrip route
// app.get('/api/opentripmap', async (req, res) => {
//   try {
//     const { query } = req.query;
//     const data = await getOpenTripMapData(query);
//     res.json(data);
//   } catch (error) {
//     console.error('Error handling OpenTripMap request:', error);
//     res.status(500).json({ error: 'Error handling OpenTripMap request' });
//   }
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

  
// Call the async function to start the server
  startApolloServer();