import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import WidgetContainer from "../WidgetContainer";
import { column } from "../../../Util/Types";

afterEach(cleanup);

const fakeColumn: column = {
  size: 1,
  heading: "Heading",
  widgets: [
    {
      title: "title 1",
      subtitle: "sub 1",
      type: "list",
      api: "https://pokeapi.co/api/v2/pokemon-color/",
    },
    {
      title: "title 2",
      subtitle: "sub 2",
      type: "number",
      api: "https://pokeapi.co/api/v2/gender/3/",
    },
  ],
};

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WidgetContainer column={fakeColumn} />, div);
});

test("renders with the correct Heading", () => {
  const { getByTestId } = render(<WidgetContainer column={fakeColumn} />);
  expect(getByTestId("test-header")).toHaveTextContent("Heading");
});
