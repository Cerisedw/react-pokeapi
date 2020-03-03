import React from 'react';

function Card({imgUrl}){
    return(
        <div>
            <img src={imgUrl} alt="something"/>
        </div>
    );
}

export default Card;