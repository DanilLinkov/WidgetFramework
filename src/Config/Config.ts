import { pokemonConfiguration, pokemonApiDataFormater } from "./clientsConfig";

// selected client
const client = "pokemon";

// list of clients used to add the new clients
const clients = {
  pokemon: {
    name: "Pokemon",
    clientConfig: pokemonConfiguration,
    // set/create a new data formater if using a different client
    // unless the object properties used are the same
    clientApiDataFormater: pokemonApiDataFormater,
  },
};

/**
 * Returns a client based on the client name set above
 */
const getSelectedClientConfig = () => {
  return clients[client];
};

export { getSelectedClientConfig };
