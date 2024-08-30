import React from 'react'
import { usePopuplarMoviesQuery } from '../../../../hooks/usePopuplarMovies'

const Banner = () => {
  const { data } = usePopuplarMoviesQuery();
  console.log("data: ", data);
  return (
    <div>
      Banner
    </div>
  )
}

export default Banner
