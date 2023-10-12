import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Pokemon as PokemonType } from "../../types";

interface PokemonProps {
  pokemon: PokemonType;
  onPressBack: () => void;
  onPressNext: () => void;
}

export const Pokemon = ({
  pokemon,
  onPressBack,
  onPressNext,
}: PokemonProps) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          sx={{ width: "70px" }}
        />
      }
      title={
        <Typography component='h3' textTransform="capitalize" variant="h6">
          {pokemon.name}
        </Typography>
      }
    />
    <CardContent>
      <Typography>Weight: {pokemon.weight}</Typography>
      {pokemon.stats.map((stat) => (
        <Typography key={`stat-${stat.stat.name}`} textTransform="capitalize">
          {`${stat.stat.name}: ${stat.base_stat}`}
        </Typography>
      ))}
    </CardContent>
    <CardActions disableSpacing>
      <Button onClick={onPressBack} disabled={pokemon.id === 1} size="small">
        Prev
      </Button>
      <Button onClick={onPressNext} size="small">
        Next
      </Button>
    </CardActions>
  </Card>
);
