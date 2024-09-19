export type MoviesGenre = {
  name: string;
};

export type MoviesRatings = {
  imdb: number;
  kp: number;
};

export type MovieProps = {
  id: number;
  poster: any;
  name: string;
  shortDescription: string;
  rating?: MoviesRatings;
  genres?: MoviesGenre[];
  year?: number;
};

export type MoviesResponseType = {
  docs: MovieProps[];
  pages: number;
};

export type FilterParamsType = {
  option: string;
  value: string;
};
