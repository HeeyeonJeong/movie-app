import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie ({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <div>
                <img src={poster} alt={title} title={title}/>
            </div>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__year">{year}</h4>
                <ul className="movie__genres">
                    {genres.map((genre, index)=>
                        <li key={index} className="genres__genre">{genre}</li>
                    )}
                </ul>
                <p className="summary">{summary.slice(0,160)}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;