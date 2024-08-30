import React from 'react';
import { usePopuplarMoviesQuery } from '../../../../hooks/usePopuplarMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopuplarMoviesQuery();

  console.log("data: ", data); // 여기서 data가 찍힐지 확인

  // Loading 상태일 때
  if (isLoading) {
    return <h1>Loading...</h1>; // return 추가
  }

  // Error 상태일 때
  if (isError) {
    return (
      <Alert variant='danger'>
        {error.message} {/* return 추가 */}
      </Alert>
    );
  }

  // 데이터가 정상적으로 로드되었을 때
  if (data && data.results && data.results.length > 0) {
    const imageUrl = `https://image.tmdb.org/t/p/original${data.results[0].poster_path}`;

    return (
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='banner banner-text-area'>
        <div className="text-white">
          <h1>{data.results[0].title}</h1>
          <p>{data.results[0].overview}</p>
        </div>
      </div>
    );
  }

  return <h1>No movies found.</h1>; // 영화가 없을 때 처리
};

export default Banner;
