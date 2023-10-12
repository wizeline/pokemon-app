import { Pokemon as PokemonType } from "../../types";
import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import { Loading } from "../loading/Loading";

const getPokemonInfo = async (pokemonId: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  return (await response.json()) as PokemonType;
};

const ConnectedPokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [loading, setLoading] = useState(false);
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    if (pokemonId) {
      setLoading(true);
      getPokemonInfo(pokemonId).then((data) => {
        setPokemon(data);
        setLoading(false);
      });
    }
    return () => {
      setLoading(false);
    };
  }, [pokemonId]);

  const onPressBack = useCallback(() => {
    setPokemonId((prev) => prev - 1);
  }, [setPokemonId]);

  const onPressNext = useCallback(() => {
    setPokemonId((prev) => prev + 1);
  }, [setPokemonId]);

  if (!pokemon || loading) {
    return <Loading />;
  }

  return (
    <Pokemon
      pokemon={pokemon}
      onPressBack={onPressBack}
      onPressNext={onPressNext}
    />
  );
};

export { ConnectedPokemon as Pokemon };
