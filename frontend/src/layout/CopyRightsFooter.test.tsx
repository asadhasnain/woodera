import { render } from "@testing-library/react";
import { AnnouncementBar } from "./AnnouncementBar";

test("CopyRightsFooter rendering with message letsDoIt", () => {
  const component = render(<AnnouncementBar message="letsDoIt" />);
  const element = component.getByText("letsDoIt");
  expect(element).toBeInTheDocument();
});