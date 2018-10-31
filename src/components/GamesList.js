import React from 'react';

// import GameCard from "./GameCard";
import GameCard from './GameCrad';


const GamesList = ( {games} ) => (
    <div className= "ui four cards">
        {games.map(game => <GameCard game={game} key={game._id} />)}
    </div>
);


export default GamesList;