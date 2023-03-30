import React from 'react';
import './Break.css'
const Break = (props) => {
    const { breakTime } = props.breakTime;
    return (
        <div className='break-button'>

            <button onClick={() => props.addBreakTime(props.breakTime)}>{breakTime}</button>


        </div>
    );
};

export default Break;