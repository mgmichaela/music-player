import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return (
        <div className='player'>
            <div className='time-control'>
                <p>Start Time</p>
                <input type='range' />
                <p>End Time</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className='play-back' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon className='play' size='2x' icon={faPlay} />
                <FontAwesomeIcon className='play-forward' size='2x' icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player;