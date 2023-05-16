import { render } from "@testing-library/react";
import { Container } from "./Container";

test("Container rendering child component with text `Hello World`", () => {
  const text = "Hello World";
  const component = render(<Container><h1>{text}</h1></Container>);
  const element = component.getByText(text);
  expect(element).toBeInTheDocument();
});