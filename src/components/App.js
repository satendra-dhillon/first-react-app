import React from 'react';
import GamesList from './GamesList';


const games = [
    {
        _id: 1,
        name: "First Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: 390,
        players: '2-4',
        duration: 50
    },
    {
        _id: 2,
        name: "Second Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: 390,
        players: '2-4',
        duration: 50
    },
    {
        _id: 3,
        name: "third Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: 3909,
        players: '2-4',
        duration: 50
    },
    {  
        _id: 4,
        name: "Fourth Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: 3909,
        players: '2-4',
        duration: 50
    }
]

const App = () => (
    <div className="ui container">
        <GamesList games = { games} />
    </div>
);


export default App;