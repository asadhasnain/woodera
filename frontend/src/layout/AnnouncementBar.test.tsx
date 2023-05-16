import { render } from "@testing-library/react";
import { AnnouncementBar } from "./AnnouncementBar";

test("AnnouncementBar rendering with background-color: green", () => {
  const component = render(<AnnouncementBar message="test" />);
  const element = component.getByTestId("announcement-bar");
  expect(element).toBeInTheDocument();
});