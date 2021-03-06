import React from 'react';
import { connect } from 'react-redux';
import '../Card/Card.scss'
import images from '../../assets/images';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ movie, poster, title, favorites, clickFavIcon }) => {
  let favImage;
  if (favorites.map(favorite => favorite.title).includes(title)) {
    favImage = images.favActive
  } else {
    favImage = images.favInactive
  }

  let route

   if (movie) {
    route = `/movies/${movie.movie_id}`
  }

  return (
    <div className="card">
      <img className="card-img" src={poster} alt="movie poster" />
      <div className='card-footer'>
        <Link to={{
          pathname: route,
          state: {
            movie: movie
          }
        }}>
          <img className="info-icon" src={images.movieInfo} alt="info icon"/>
        </Link>  
        <h3 className ="movie-title">{title}</h3>
        <img className="favorite-icon" src={favImage} alt="" onClick={(e) => clickFavIcon(e, movie)} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ favorites }) => ({
  favorites
})

export default connect(mapStateToProps)(Card);

Card.propTypes = {
  movie: PropTypes.object,
  favorites: PropTypes.array,
  poster: PropTypes.string,
  title: PropTypes.string,
  clickFavIcon: PropTypes.func
}