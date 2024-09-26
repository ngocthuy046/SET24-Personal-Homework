import CounterA from "../components/counterA";
import ContextProvider from "../CounterContext";

const App = () => {
    return (
        <div>
            <ContextProvider>
                <CounterA />
            </ContextProvider>
        </div>
    );
}

export default App;