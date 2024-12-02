import React from 'react'

const MovieCard = ({movie}) => {
    
  return (
    <>
       <img src={"https://image.tmdb.org/t/p/original"+ movie.poster_path} className='w-[110px] md:w-[180px] rounded-lg hover:border-[3px] border-gary-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer'/>
    </>
  )
}

export default MovieCard;
