import React from 'react';

// import GameCard from "./GameCard";
import GameCard from './GameCrad';
import PropTypes from 'prop-types';


const GamesList = ( {games} ) => (
    <div className= "ui four cards">
        {games.map(game => <GameCard game={game} key={game._id} />)}
    </div>
);

GamesList.PropTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GamesList;

