import React from 'react';
import { useSearchMoviewQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMoviewQuery({keyword}); // 오타 수정

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // 오류 처리
  }

  return (
    <div>
      <h1>Movie Page</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>{movie.title}</li> // 영화 제목 출력
          ))}
        </ul>
      ) : (
        <p>No movies found.</p> // 영화가 없을 때 메시지
      )}
    </div>
  );
};

export default MoviePage;
