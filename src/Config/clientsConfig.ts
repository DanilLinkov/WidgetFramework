import { config, configApiFormater } from "../Util/Types";

/**
 * Allows to choose which api result properties to use for the widget
 * and which data to add for the widget to show.
 *
 * This assumes that same widget types would use the same object property however
 * this is a bad assumption as different apis and endpoints would have different format.
 * However it was still done this way so that the client config stayed the
 * same as the one provided in the PDF as I was not sure if we are allowed to change it.
 */
export const pokemonApiDataFormater: configApiFormater = {
  number: (data: any) => {
    return data.pokemon_species_details.length;
  },
  list: (data: any) => {
    const output: string[] = [];
    data?.results.map((listItem: any) => output.push(listItem.name));
    return output;
  },
};

/**
 * Added the ability to turn off gap filling by adding the property
 * fillGap: false
 * This is true by default
 *
 * This does not force any changes to the client config and was added mostly for fun
 *
 * unlike the comment above talking about API formater which would force the config
 * to have those two extra fields
 */
export const pokemonConfiguration: config = {
  columns: [
    {
      // First column
      size: 1, // The size of the column
      heading: "General Pokemon information",
      widgets: [
        {
          title: "Pokemon colours",
          subtitle: "List of all the colours",
          type: "list",
          api: "https://pokeapi.co/api/v2/pokemon-color/",
        },
        {
          title: "Genderless count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/3/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
      ],
    },
    {
      // Second column
      size: 3, // The size of the column
      heading: "Pokemon counts",
      widgets: [
        {
          title: "Genderless count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/3/",
        },
        {
          title: "Female count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/1/",
        },
        {
          title: "Male count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/2/",
        },
        {
          title: "Pokemon colours",
          subtitle: "List of all the colours",
          type: "list",
          api: "https://pokeapi.co/api/v2/pokemon-color/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/",
        },
      ],
    },
  ],
};
