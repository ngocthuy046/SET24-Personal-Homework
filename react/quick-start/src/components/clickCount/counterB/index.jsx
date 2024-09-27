import React, { useContext,useState} from "react";
import { CounterContext } from "../CounterContext";

export default function CounterB() {
    const [counterB, setCounterB] = useState(0);
    const { setCounterA } = useContext(CounterContext);

    const increaseCounterB = () => {
        setCounterB(counterB + 1);
    };

    const increaseCounterA = () => {
        setCounterA(prevCount => prevCount + 1)
    }
    const increaseBoth = () => {
        increaseCounterB();
        increaseCounterA();
    }

    return (
        <div class="counter-b">
            <h3>Counted B: {counterB}</h3>
            <button onClick={increaseCounterB}>Increase B</button>
            <button onClick={increaseCounterA}>Increase A</button>
            <button onClick={increaseBoth}>Increase Both</button>
        </div>
    )
}

