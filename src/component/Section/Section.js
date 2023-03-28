import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Section.css'
import man from '../../pic.png'
const Section = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch("fakeDB.json")
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className='Cards-Container'>
            <div className='gym-item-container'>
                {
                    cards.map(card => <Card card={card}></Card>)
                }

            </div>
            <div className='summary-container'>
                <div className='user'>
                    <img src={man} alt="" />
                    <p>Kuddus Mia
                        <br />
                        <small>Location: Uganda</small>
                    </p>
                </div>
                <div className="user-info">
                    <p>75 <small>kg</small> <br /> <span>Weight</span></p>
                    <p>6.5 <small>Feet</small> <br /> <span>Height</span></p>
                    <p>25 <small>yrs</small> <br /> <span>Age</span></p>
                </div>
                <h5>Add a break</h5>
                <div className='break-button'>
                    <button>10s</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>
                </div>
                <h5>Exercise Details</h5>

            </div>
        </div>
    );
};

export default Section;