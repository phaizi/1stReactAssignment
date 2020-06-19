import React from 'react';
import './Add.css';
let Add = () => {
        function calc(e) {
        e.preventDefault(); 
        const number1 = document.getElementById("num1").value;
        const number2 = document.getElementById("num2").value; 
        const para1 = document.getElementById('para');
        para1.innerText = number1 + ' + ' + number2 + ' = ' + (parseInt(number1) + parseInt(number2));         
    };

    return <form > 
        <h4>Addition operation:</h4>
        <label>Number1
            <input id='num1' type='text'/>
        </label>
        <label>Number2
            <input id='num2' type='text'/>
        </label>
        <button type="submit" onClick = {calc}>Calculate</button>
        <p id = 'para'>{}</p>

    </form>     
    };

export default Add;
