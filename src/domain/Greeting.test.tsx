import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("render greeting test for the first time", () => {
  render(<Greeting />);
  const textGreetingElement = screen.getByText("chitoriii");
  expect(textGreetingElement).toBeInTheDocument();
});
test.only("render name of greeting function", () => {
  render(<Greeting name="unit test" />);
  const greetingName = screen.getByText("chitoriii unit test");
  expect(greetingName).toBeInTheDocument();
});
describe.skip("Greeting Group", () => {
  test("first Group of greeting", () => {
    render(<Greeting name="jack" />);
    const greetingName = screen.getByText("chitoriii jack");
    expect(greetingName).toBeInTheDocument();
  });
});
