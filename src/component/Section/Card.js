import React from 'react';
import './Card.css'
const Card = (props) => {
    const { name, time, picture, eyeColor, about } = props.card;
    // console.log(props.card);
    return (
        <div className='card-container'>
            <img src={picture} alt="" />
            <div>
                <h4>Excise Name: {name}</h4>
                <p>{about}</p>
                <p>Color: {eyeColor}</p>
                <p>Time Required: {time}s</p>

            </div>
            <button onClick={() => props.addToListHandle(props.card)}><p>ADD TO LIST</p></button>
        </div>
    );
};

export default Card;