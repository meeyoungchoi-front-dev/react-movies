import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {
  const {data: genreData} = useMovieGenreQuery();

  const showGenre = (genereIdList) => {
    if (!genreData) {
        return []
    }
    const genreNameList = genereIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)
      return genreObj.name;
    })
  }

  return (
    <div 
    style={{backgroundImga:"url(" + `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` + ")" }} className="movie-card">
     <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => {
            <Badge bg="secondary">{id}</Badge>
        })}
        <div>
            {movie.vote_average}
        </div>
        <div>
            {movie.popularity}
        </div>
        <div>
            {movie.adult?'over18':'under18'}
        </div>
     </div>
    </div>
  )
}

export default MovieCard
