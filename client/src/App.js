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
        <div className= 'app-container justify-content center'>
          {/* Container for the Header and Nav Bar */}
          <div className='header-container'>
          <Header />
          </div>
          {/* Container for the carousel */}
          <div className='carousel-container'>/</div>
          <div className="main-content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/profile/' element={<Profile />} />
            <Route exact path='/location/:locationId' element={<Location />} />
          </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
