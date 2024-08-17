import { ApolloClient, InMemoryCache } from '@apollo/client';

// TODO: place this uri in .env
const client = new ApolloClient({
  uri: 'https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
