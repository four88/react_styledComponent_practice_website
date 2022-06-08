import React from 'react'
import {Container} from '../styles/layoutStyled'

function Home() {
  return (
    <Container>
        <h1>Home</h1>
        <hr/>
        <p>This website made by react using style-components for learing propose</p>
        <ul>
          <li>react hooks</li>
          <li>axios (for connect api)</li>
          <li>style-components</li>
          <li>react-loading</li>
        </ul>
        
    </Container>
  )
}

export default Home