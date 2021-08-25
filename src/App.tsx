import React from "react";
import WidgetItem from "./Components/WidgetItem/WidgetItem";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <WidgetItem
      widget={{
        title: "Pokemon Gender",
        subtitle: "List of all the genders",
        type: "list",
        api: "https://pokeapi.co/api/v2/gender/",
      }}
    />
  );
}

export default App;
