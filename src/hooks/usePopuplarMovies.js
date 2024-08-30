import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 인기 영화 데이터를 가져오는 함수
const fetchPopularMovies = async () => {
    let response = '';
    try {
        response = await api.get('/movie/popular?language=en-US&page=1');
        console.log(response.data); // 데이터 확인
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
    return response.data; // 응답 데이터 반환
}


// 커스텀 훅
export const usePopuplarMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        // select는 데이터를 추가로 가공할 필요가 있을 때 사용
    });
};
