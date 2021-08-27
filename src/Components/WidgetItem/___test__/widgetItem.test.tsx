import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import WidgetItem from "../WidgetItem";
import { widget } from "../../../Util/Types";

afterEach(cleanup);

/**
 * Only a few test cases here because Header and WidgetContent
 * are already tested elsewhere as WidgetItem just passes data to them
 */

const fakeNumberWidget: widget = {
  title: "test",
  subtitle: "test",
  type: "number",
  api: "https://pokeapi.co/api/v2/gender/3/",
};

const fakeListWidget: widget = {
  title: "test",
  subtitle: "test",
  type: "list",
  api: "https://pokeapi.co/api/v2/pokemon-color/",
};

test("renders without crashing number", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WidgetItem widget={fakeNumberWidget} size={12} />, div);
});

test("renders without crashing list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WidgetItem widget={fakeListWidget} size={12} />, div);
});
