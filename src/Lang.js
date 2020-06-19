import React from 'react';
import './Lang.css';

const Lang = ({one, two, three}) => 

    <div id='ln'>
        <h4>Languages I m learning:</h4>
        <ol>
            <li>{one}</li>
            <li>{two}</li>
            <li>{three}</li>
        </ol>
    </div>


export default Lang;