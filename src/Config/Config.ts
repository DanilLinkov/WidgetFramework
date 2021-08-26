import { pokemonConfiguration, pokemonApiDataFormater } from "./clientsConfig";

// selected client
const client = "pokemon";

// list of clients
const clients = {
  pokemon: {
    clientConfig: pokemonConfiguration,
    // set/create a new data formater if using a different client
    // unless the object properties used are the same
    clientApiDataFormater: pokemonApiDataFormater,
  },
};

const getSelectedClientConfig = () => {
  return clients[client];
};

export { getSelectedClientConfig };
