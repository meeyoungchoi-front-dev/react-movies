import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetPopularMovies = () => {
    return api.get(`/movie/popular`);
}

export const usePopuplarMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetPopularMovies,
        select: (result) => result.data,
    })
}