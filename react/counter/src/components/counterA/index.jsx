import React, { useContext, useState } from 'react';
import { CounterContext } from '../../CounterContext';
import CounterB from '../counterB';

export default function CounterA() {
    const { counterA, setCounterA } = useContext(CounterContext);
    function increaseCounterA() {
        setCounterA(prevCount => prevCount + 1)
    }
    return (
        <div class="counter-a">
            <h1>Counter</h1>
            <h2>Counted A: {counterA}</h2>
            <button onClick={increaseCounterA}>Increase A</button>
            <CounterB />
        </div>
    )
}

