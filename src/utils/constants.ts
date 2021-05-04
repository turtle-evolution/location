// const HASURA_GRAPHQL_ENGINE_HOSTNAME = '<YOUR HASURA APP DOMAIN>';

// const scheme = (proto: string) => {
//   return window.location.protocol === 'https:' ? `${proto}s` : proto;
// };

// export const GRAPHQL_URL = `${scheme(
//   'http'
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

// export const REALTIME_GRAPHQL_URL = `${scheme(
//   'ws'
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

// export const authClientId = '<YOUR AUTH0 CLIENT ID>';
// export const authDomain = '<YOUR AUTH0 DOMAIN>';
// export const callbackUrl = `http://localhost:3000/callback`; // modify `callbackUrl` to point to your localhost

const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'http://localhost:3000'; //"react-apollo-todo.demo.hasura.app";
const HASURA_CLOUD_HOSTNAME = 'https://turtle-evolution-85.hasura.app'; //"react-apollo-todo.hasura.app";

const scheme = (proto: string) => {
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  'http'
)}://${HASURA_CLOUD_HOSTNAME}/v1/graphql`;
export const REALTIME_GRAPHQL_URL = `${scheme(
  'ws'
)}://${HASURA_CLOUD_HOSTNAME}/v1/graphql`;
// export const authClientId = "Fl-hdc6xdYIkok9ynbcL6zoUZPAIdOZN";
// export const authDomain = "hasura-react-apollo-todo.auth0.com";
export const callbackUrl = `${scheme(
  'http'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/callback`;
