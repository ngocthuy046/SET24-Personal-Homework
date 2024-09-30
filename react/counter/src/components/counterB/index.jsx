import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { increment } from '../../counterSlice';

export default function CounterB() {
    const [ counterB, setCounterB ] = useState(0)
    function incrementCounterB() {
        setCounterB(counterB + 1)
    }
    
    const dispatch = useDispatch()

    return (
        <div class="counter-b">
            <h2>Counted B: {counterB}</h2>
            <button onClick={incrementCounterB}
            >Increase B</button>
            <button onClick={() => dispatch(increment())}
            >Increase A</button>
        </div>
    )
}

