import React from 'react'
import Cocktail from './../components/Cocktail'
// import CocktailList from './../components/CocktailList'

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>About Us</h1>
      <p>
        This is the Last project "Cocktail". This project is made using React
        router, ContextApi,Hooks and all the major React components we can
        possibly use in one single Project. This project fetches the api and
        show us the content i.e information about Cocktails. We can search Any
        Cocktail using the search bar provided as long as name matches the
        Cocktails name.
      </p>
    </section>
  )
}

export default About