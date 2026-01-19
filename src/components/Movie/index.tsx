// import React from 'react'
import type React from 'react'
import { MovieContainer } from './Movie.style'
import Typography from '../Typography'

interface MovieProperties {
    name?: string,
    vote_avarage?: string,
    genre_ids?: number[],
}

const Movie: React.FC<MovieProperties> = ({ name }) => {
  return (
    <MovieContainer>
        <img src="icons/heroicons-solid/pause.svg" alt="plus-icon" />
        <div className='content' >
            <Typography type='h4'>{name}</Typography>
            <Typography type='p3' >Action</Typography>
            <p>rate</p>
        </div>
    </MovieContainer>
  )
}

export default Movie
