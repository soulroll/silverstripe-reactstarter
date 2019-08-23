import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { gql } from 'apollo-boost';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

const httpLink = createHttpLink({ uri: '/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProviderHooks>
  </ApolloProvider>,
  document.getElementById('root')
)
