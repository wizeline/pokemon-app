import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading Component", () => {
  it("renders correctly", () => {
    render(<Loading />);

    expect(
      screen.getByRole("progressbar")
    ).not.toBeNull();
  });
});
