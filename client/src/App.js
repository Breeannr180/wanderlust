import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Search from './components/Wiki/Search';
import Home from './components/pages/Home';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists.
  const token = localStorage.getItem('id_token');
  // Return the headers to the context so httpLink can read them.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Instantiate Apollo Client.
const client = new ApolloClient({
  // Set up our client to execute the 'authLink' middleware prior to making the request to our GraphQL API.
  link: authLink.concat(httpLink),
  // Instantiate an in-memory cache object.
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/search' element={<Search />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
