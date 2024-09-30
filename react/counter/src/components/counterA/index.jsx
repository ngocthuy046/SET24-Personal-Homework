import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../counterSlice';
import CounterB from '../counterB';

export default function CounterA() {
    const counterA = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div class="counter-a">
            <h1>Counter</h1>
            <h2>Counted A: {counterA}</h2>
            <button onClick={() => dispatch(increment())}
            >Increase A</button>
            <CounterB />
        </div>
    )
}

