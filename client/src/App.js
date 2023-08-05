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
import { Home, Login, Profile, Location } from './components/pages';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileProvider } from './utils/GlobalState';

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
    <ProfileProvider>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/search' element={<Search />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/profile/:id' element={<Profile />} />
              <Route exact path='/location/:id' element={<Location />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </ProfileProvider>
  );
}

export default App;
