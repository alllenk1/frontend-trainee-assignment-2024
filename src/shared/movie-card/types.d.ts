export type MoviesGenre = {
  name: string;
};

export type MoviesRatings = {
  imdb: number;
  kp: number;
};

export type MovieProps = {
  poster: any;
  name: string;
  shortDescription: string;
  rating?: MoviesRatings;
  genres?: MoviesGenre[];
};
