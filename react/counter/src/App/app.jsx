import CounterA from "../components/counterA";
import store from "../store.js";
// import ContextProvider from "../CounterContext";

import { Provider } from "react-redux";

const App = () => {
    return (
        <div>
            <Provider store={store}> 
                <CounterA />
            </Provider>
            {/* <ContextProvider>
                <CounterA />
            </ContextProvider> */}
        </div>
    );
}

export default App;