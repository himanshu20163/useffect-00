import React, { useEffect, useState } from 'react'

const Passwordgenrate = () => {
    const[state,Setstate] = useState();
    const[showtext,Setshowtext] = useState();
    const get_value = (e)=>{
        Setstate(e.target.value);
    }

    const add_data = ()=>{
// Small alphabet characters array
const smallAlphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

// Capital alphabet characters array
const capitalAlphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

// Special characters array
const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\',
    ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '`', '~'
];

const number = [0,1,2,3,4,5,6,7,8,9];
    
const numRandomValues = Math.floor(state/4);
console.log(numRandomValues);
const small_alpha_value = generateRandomValues(smallAlphabets, numRandomValues);
const captial_alpha_value  = generateRandomValues(capitalAlphabets, numRandomValues);
const speacial_value = generateRandomValues(specialCharacters, numRandomValues);
const no = generateRandomValues(number,numRandomValues);
const ans = small_alpha_value+captial_alpha_value+speacial_value+no;
console.log("Random Values:", ans);
Setshowtext(ans); 
    }

    function generateRandomValues(arr, numValues) {
        const randomValues = [];
        for (let i = 0; i < numValues; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            randomValues.push(arr[randomIndex]);
        }
        return randomValues;
    }
   
    
  return (
    <div>
        <input type='text' onChange={get_value}></input>
        <button onClick={add_data}>generate password</button>
        <h2>{showtext}</h2>
    </div>
  )
}

export default Passwordgenrate