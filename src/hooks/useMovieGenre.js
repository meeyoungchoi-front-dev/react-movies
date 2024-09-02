import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchMovieGenre = () => {
    return api.get(`/genere/movie/list`);
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genere'],
        queryFn: fetchMovieGenre,
        select:(reslut) => reslut.data.genres,
        staleTime: 300000 // 5분
    })
}