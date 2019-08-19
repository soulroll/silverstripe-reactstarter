import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';

// 2
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http:/localhost:8080/graphql' }),
  cache: new InMemoryCache()
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
