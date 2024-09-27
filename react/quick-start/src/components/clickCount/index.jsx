import ContextProvider from "./CounterContext";
import CounterA from "./counterA";


export default function ClickCount() {
    return (
        <ContextProvider>
            <CounterA />
        </ContextProvider>
    )
}