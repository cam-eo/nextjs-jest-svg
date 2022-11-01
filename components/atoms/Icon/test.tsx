import { Icon } from ".";
import { render } from "@testing-library/react";

describe("Icon", () => {
  it("should render Icon", () => {
    const { asFragment } = render(<Icon name="chevron-left" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
