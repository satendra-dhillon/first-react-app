import React from 'react';

// import GameCard from "./GameCard";
import GameCard from './GameCrad';
import PropTypes from 'prop-types';
import Message from './Message';


const GamesList = ( {games} ) => (
    <div className= "ui four cards">
        {
            games.length === 0 ? (
                <Message />
            ) : (
                games.map(game => <GameCard game={game} key={game._id} />)
            )
            
        }
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};

// GamesList.defaultProps = {
//     games = []
// }

export default GamesList;

