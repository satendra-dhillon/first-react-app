import React from 'react';

const GameCard = () => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label"> $32.99</span>
            <img 
                src="https://microscope-microscope.org/wp-content/uploads/2018/02/microbus-site-icon.jpg" alt="Game Cover"/>
            />
        </div>
    
        <div className="content">
            <a href="#" className="header">Quardopolis</a>
            <div className="meta">
                <i className="icon users" /> 2-4
                <i className="icon wait" /> 60 min.
            </div>
        </div>
   
    </div>
    
);


export default GameCard;