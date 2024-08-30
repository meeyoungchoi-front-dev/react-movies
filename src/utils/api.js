import axios from "axios";

// 환경 변수에서 API_KEY 가져오기
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    },
});

// 요청 및 응답 인터셉터 (필요 시 추가)
axios.interceptors.request.use(
    (config) => {
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
