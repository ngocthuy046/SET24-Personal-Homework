import { createRoot } from "react-dom/client";
import App from "./App/app";
import { Provider } from "react-redux";
import store from "./redux/store";

document.body.innerHTML = '<div id="App"></div>';
const root = createRoot(document.getElementById("App"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
