import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pokemon } from "../components/pokemon/ConnectedPokemon";

describe("Pokemon Component", () => {
  it("renders correctly", async () => {
    render(
      <Pokemon />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).not.toBeNull();
    await waitForElementToBeRemoved(progressBar);

    expect(screen.getByRole('heading')).not.toBeNull();
  });

  it("renders correctly", async () => {
    const user = userEvent.setup();
    render(
      <Pokemon />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).not.toBeNull();
    await waitForElementToBeRemoved(progressBar);

    const nextButton = screen.getByRole('button', { name: /Next/i });
    await user.click(nextButton);

    const secondProgressBar = screen.getByRole('progressbar');
    expect(secondProgressBar).not.toBeNull();
    await waitForElementToBeRemoved(secondProgressBar);

    expect(screen.getByRole('heading')).not.toBeNull();
  });
});
