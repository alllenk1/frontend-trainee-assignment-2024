import { MoviesRatings } from '@/shared/movie-card/types';
import { ActorType } from './actors/types';

export type CurrentMovieProps = {
    id: string;
    name: string;
    alternativeName: string;
    year: number;
    ageRating: number;
    description: string;
    poster: {
        url: string;
    };
    persons: ActorType[];
    rating: MoviesRatings;
    similarMovies: CurrentMovieProps[];
};
