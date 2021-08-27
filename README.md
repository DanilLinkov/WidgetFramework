# Getting started

- Download or pull the repository

- Run npm install inside the root project folder

- Run npm start inside the root project folder



- To run tests run npm test inside the root project folder

# How to use the framework

- ## clientConfig.ts

  - Change the pokemonConfiguration object to change how the dashboard appears

  - Change the pokemonApiDataFormater for a given type in order to change what api result properties are used and how they are formatted when displayed in the dashboard

- ## config.ts

  - Change the client by changing the client constant

  - Add or remove clients from the clientConfig



## Extra things implemented

- Very responsive dashboard on resizing for all sizes
- Dark mode
- The ability to allows gaps in the dashboard by adding "fillGap: false"  to a column in a client config object
- Custom scroll bar



## What could be improved or done differently

#### This is just to outline things that could have potentially have been done differently or better, as no solution is perfect and these are just some of the potential areas that could be looked into.

- Tests could be improved by querying the children of each component and checking that the right children are made
- Dark mode implementation was very basic and not very scalable therefore could be improved
- Dashboard responsiveness / behavior at different screen sizes could be played around with and changed to look better (this is very subjective as it depends on the client)
- The way the data from the API is retrieved and formatted could be implemented differently depending how what the dashboard requires and how it needs to scale. Currently the developer creates a config object with a function for each type that accepts the API response. However different APIs with completely different responses could be used which the currently solution might not be able to handle well or in a scalable manner.

