import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_URL = "https://image.tmdb.org/t/p/original";

export const fetchTrendingMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
};

export const fetchAllMovies = async (
    pages: number = 5
): Promise<Movie[]> => {
    const movies: Movie[] = []

    for (let page = 1; page <= pages; page++) {
        const res = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        )
        const data = await res.json()
        movies.push(...data.results)
    }

    return movies
}
