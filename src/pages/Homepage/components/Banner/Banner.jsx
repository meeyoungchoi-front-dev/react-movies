import React from 'react'
import { usePopuplarMoviesQuery } from '../../../../hooks/usePopuplarMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopuplarMoviesQuery();
  console.log("data: ", data);
  if (isLoading) {
    <h1>Loading...</h1>
  }
  if (isError) {
   <Alert variant='danger'>
    {error.message}
   </Alert>
  }
  return (
    <div style={{backgroundImage:"url(" + `https://www.themoviedb.org/movie/${data?.results[0].poster_path}` + ")"}} className='banner banner-text-area'>
      <div className="text-white">
        <h1>{data.results[0].title}</h1>
        <p>{data.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner
