import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import Header from "../Header";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header title="test" subtitle="test" />, div);
});

test("renders with the correct title and subtitle", () => {
  const { getByTestId } = render(
    <Header title="test-title" subtitle="test-subtitle" />
  );
  expect(getByTestId("header-title")).toHaveTextContent("test-title");
  expect(getByTestId("header-subtitle")).toHaveTextContent("test-subtitle");
});
