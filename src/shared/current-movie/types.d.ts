import type { ActorProps } from './actor/types';

export type CurrentMovieProps = {
  name: string;
  alternativeName: string;
  year: number;
  ageRating: number;
  description: string;
  poster: any;
  videos: any;
  persons: ActorProps[];
};
