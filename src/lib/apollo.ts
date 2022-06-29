import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl500vspv0qgp01uk2l1hgz86/master',
  cache: new InMemoryCache()
})