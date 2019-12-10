import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';
import Header from '../Header/Header'
import ScrollingText from '../ScrollingText/ScrollingText';
import PropTypes from 'prop-types';


const CharacterContainer = (props) => {
  const characters = props.movie.characters.map((character, i) => {
    let world = character.world[0];
    return <Character
      key={i}
      name={character.name}
      world= {world.name}
      population={world.population}
      species={character.species[0]}
      relatedFilms={character.relatedFilms.join(', ')}
    />
  })


  return (
    <>
      <Header
          logOut={ props.logOut }
          user={ props.user }
        />
        <main className="character-container">
          <ScrollingText movieText={props.movie.openingCredits}
          movieTitle={props.movie.title}
          episodeNumber={props.movie.episode}/>
          <header>
            <h1 className="movie-title">{props.movie.title} Characters</h1>
          </header>
          {characters}
      </main>
    </>
  )
}

export default CharacterContainer;

CharacterContainer.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}
