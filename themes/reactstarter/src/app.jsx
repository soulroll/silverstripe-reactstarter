import React from 'react';
import { render } from 'react-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { BrowserRouter } from 'react-router-dom';

import Index from './Index';

const httpLink = createHttpLink({ uri: '/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </ApolloProvider>
)

render(<App />, document.getElementById('app'));

