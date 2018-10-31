import React from "react";
import {render} from "react-dom";
import "semantic-ui-css/semantic.min.css";
import GameCard from './components/GameCrad';

const games = [
    {
        name: "First Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: "39.09",
        players: '2-4',
        duration: '50'
    },
    {
        name: "Second Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: "39.09",
        players: '2-4',
        duration: '50'
    },
    {
        name: "third Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: "39.09",
        players: '2-4',
        duration: '50'
    },
    {
        name: "Fourth Game",
        thumbnail: "https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg",
        price: "39.09",
        players: '2-4',
        duration: '50'
    }
]


render(< GameCard game={games[1]} />, document.getElementById('root'));
