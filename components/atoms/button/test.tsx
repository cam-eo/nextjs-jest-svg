import { Button } from ".";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("should render Button", () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});
