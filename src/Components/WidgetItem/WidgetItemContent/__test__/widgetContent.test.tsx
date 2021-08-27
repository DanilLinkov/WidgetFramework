import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

import WidgetContent from "../WidgetContent";

afterEach(cleanup);

test("renders without crashing for number", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WidgetContent type="number" data={123} />, div);
});

test("renders without crashing for list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WidgetContent type="list" data={["1", "2", "3"]} />, div);
});

test("renders with the correct number", () => {
  const { getByTestId } = render(<WidgetContent type="number" data={123} />);
  expect(getByTestId("number-test")).toHaveTextContent("123");
});

test("renders with the correct list", () => {
  const { getByTestId } = render(
    <WidgetContent type="list" data={["1", "2", "3"]} />
  );
  expect(getByTestId("list-test")).toHaveTextContent("1");
  expect(getByTestId("list-test")).toHaveTextContent("2");
  expect(getByTestId("list-test")).toHaveTextContent("3");
});

test("renders with unsupported type", () => {
  // ignore the typescript error for testing
  const { getByTestId } = render(<WidgetContent type="test" data={123} />);
  expect(getByTestId("unsupported-test")).toHaveTextContent(
    "Unsupported widget type"
  );
});
