import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const component = render(<App />);
  const element = component.getByTestId("container");
  expect(element).toBeInTheDocument();
});
