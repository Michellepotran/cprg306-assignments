"use Client";

import {useState} from 'react';


export default function Counter(){
    const [count, setCount] = useState(0);
    //useState returns an array with two elements
    // the first element is the current value of the state
    // the second element is a function to update the state
    
    //never, mutate the state directly
    // count = count + 1; //wrong
    let a =0;
    function increment(){
        a++;
    }

    function increment(){
    setCount(count+ 1);
    }

    return(
    <div>
    <h1>Counter</h1>
        <p>{count}</p>
        <button onClick = {increment}>Increment</button>
    </div>);
}



