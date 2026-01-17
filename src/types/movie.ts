export type Movie = {
    id: number;
    title: string;
    name?: string;
    genre_ids: number[];
    poster_path: string;
    backdrop_path: string;
    release_date?: string;
    vote_count?: number;
    vote_average: number;
    overview: string;
};
