export type MoviesGenre = {
    name: string;

    onChangeFilterParams: (params: FilterParamsType) => void;
};

export type MoviesRatings = {
    imdb: number;
    kp: number;
};

export type MovieProps = {
    id: number;
    poster: {
        url: string;
    };
    name: string;
    shortDescription: string;
    rating?: MoviesRatings;
    genres?: MoviesGenre[];
    year?: number;

    onChangeFilterParams: (params: FilterParamsType) => void;
};

export type MoviesResponseType = {
    docs: MovieProps[];
    pages: number;
};

export type FilterParamsType = {
    option: string;
    value: string;
};
