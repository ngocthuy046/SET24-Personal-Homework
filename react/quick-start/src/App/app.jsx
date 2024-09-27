import Profile from "../components/profile";
import ConditionalLogin from "../components/conditionalLogin";
import RenderList from "../components/renderList";
import ClickCount from "../components/clickCount";

const App = () => {
    return (
        <div>
            <RenderList />
            <ConditionalLogin />
            <Profile />
            <ClickCount />
        </div>
    );
}

export default App;