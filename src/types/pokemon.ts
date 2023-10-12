interface stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  sprites: {
    [key : string]: string;
  };
  stats: stat[];
}