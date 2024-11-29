import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/actions/user.action";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  function handleLogout() {
    dispatch(LogoutUser());
    // localStorage.removeItem("users");
    alert("Logged out successfully");
    // window.location.reload();
  }
  return (
    <header className="header">
      <div className="user-information">
        <div className="user">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a2da0ed470c0d685115f59a09380b651780ed1c1e2895db906bf53a1d4f9e?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt="User avatar"
            className="user-avatar"
          />
          <p className="user-name">John Holland</p>
        </div>
        <button
          className="logout-button"
          aria-label="Notifications"
          onClick={handleLogout}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe2cbf71a0db6c57345383707991726983b9709c8f59f27ed25cee221643e12?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt=""
            className="object-contain w-6 aspect-square"
          />
        </button>
      </div>
      <div className="welcome-message">
        <h1>
          Welcome,
        </h1>
        <p>
          You've got 4 tasks to do.
        </p>
      </div>
    </header>
  );
}


function TaskManager() {
  const tasks = [
    { id: 1, text: "Design use case page" },
    { id: 2, text: "Design use case page" },
    { id: 3, text: "Design use case page" },
    { id: 4, text: "Design use case page" },
  ];

  return (
    <div className="task-manager">
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  );
}


export default function AdminPanel() {
  return (
    <div className="main-section">
      <Header />
      {/* <TaskManager /> */}
    </div>
  );
};