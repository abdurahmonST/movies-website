// import React from 'react'
import { HomeContainer, Top, Trends } from './Home.style'
import { Typography } from '../../components'
import Movie from '../../components/Movie'

const Home = () => {
  return (
    <HomeContainer>
      {/* Banner */}
      <Trends>
        <Top>
            <Typography type='h2' >Trends</Typography>
            <button>
                <Typography type='h3' color='#228EE5'>See More</Typography>
                <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
            </button>
        </Top>
        <Movie />
      </Trends>
    </HomeContainer>
  )
}

export default Home
