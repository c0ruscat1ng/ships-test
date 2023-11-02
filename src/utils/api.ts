import { ApolloClient, InMemoryCache } from '@apollo/client';
import {gql} from "graphql-tag";

const client = new ApolloClient({
    uri: 'https://vortex.korabli.su/api/graphql/glossary/',
    cache: new InMemoryCache(),
});
export const SHIP_LIST_QUERY = gql`
  query ShipList {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

export default client;