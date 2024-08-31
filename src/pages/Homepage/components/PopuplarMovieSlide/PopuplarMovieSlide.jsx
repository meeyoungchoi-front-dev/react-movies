import React from 'react'
import { usePopuplarMoviesQuery } from '../../../../hooks/usePopuplarMovies'
import { Alert } from 'bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./PopuplarMovieSlide.style.css";
import MovieSlider from '../../../../common/MovieSlider';
import {responsive} from '../../../../constants/responsive';



const PopuplarMovieSlide = () => {
  const {data, isLoading, isError, error} = usePopuplarMoviesQuery();

  if (isLoading) {
    return  <h1>Loading...</h1>
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <div>
      <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default PopuplarMovieSlide
