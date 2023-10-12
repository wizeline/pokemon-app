import { render, screen } from "@testing-library/react";
import { Pokemon } from "./Pokemon";
import { vi } from 'vitest'

const mockPokemon = {
  id: 1,
  name: "My pokemon",
  weight: 200,
  sprites: {},
  stats: [],
};

describe("Pokemon Component", () => {
  it("renders correctly", () => {
    render(
      <Pokemon
        pokemon={mockPokemon}
        onPressBack={() => {}}
        onPressNext={() => {}}
      />
    );

    expect(screen.getByText("My pokemon")).not.toBeNull();
  });

  it("press on next", () => {
    const mockNext = vi.fn();
    render(
      <Pokemon
        pokemon={mockPokemon}
        onPressBack={() => {}}
        onPressNext={mockNext}
      />
    );
    
    const nextButton = screen.getByRole("button", { name: /Next/i });
    nextButton.click();
    expect(mockNext).toBeCalled();
  });
});
