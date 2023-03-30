import React, { useEffect, useState } from 'react';
import man from '../../pic.png'
import Break from '../Break/Break';
import Card from './Card';
import './Section.css'

const Section = () => {
    const [cards, setCard] = useState([]);
    const [cart, setCart] = useState([]);
    const [breakTimes, setBreakTimes] = useState([]);
    const [restTime, setRestTime] = useState([]);
    useEffect(() => {
        fetch("fakeDB.json")
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);
    useEffect(() => {
        fetch("breakTime.json")
            .then(res => res.json())
            .then(data => setBreakTimes(data))
    }, [])

    const addToListHandle = (card) => {
        console.log(card)
        const newCart = [...cart, card]
        setCart(newCart);
    }
    let total = 0;
    for (const card of cart) {
        total = total + card.time
    }

    const addBreakTime = (breakTime) => {
        console.log(breakTime.breakTime);
    }
    return (
        <div className='Cards-Container'>
            <div className='gym-item-container'>
                {
                    cards.map(card => <Card card={card}
                        addToListHandle={addToListHandle}>
                    </Card>)
                }

            </div>
            <div className='summary-container'>
                <div className='cart-container'>
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
                    <div>
                        {
                            breakTimes.map(breakTime => <Break breakTime={breakTime}
                                addBreakTime={addBreakTime}></Break>)
                        }
                    </div>
                    <h5>Exercise Details</h5>
                    <p className='total-time'>Total Exercise Time: {total}s</p>
                    <p className='total-time'>Break Time: </p>
                </div>
            </div>
        </div>
    );
};

export default Section;