import React, { useState, useEffect } from "react";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTaskTitle,
} from "../../_apis/taskApi";

const FilterOptions = ({ selectedFilter, setFilter }) => {
  const filters = [
    { value: "all", label: "All" },
    { value: "done", label: "Done" },
    { value: "undone", label: "Undone" },
  ];

  return (
    <div className="flex gap-5 items-center self-center mt-5">
      <div className="self-stretch my-auto text-base font-semibold text-gray-800">
        Filter:
      </div>
      <div role="radiogroup" className="flex gap-5">
        {filters.map((filter) => (
          <label
            key={filter.value}
            className="flex gap-2 items-center self-stretch my-auto rounded-lg cursor-pointer"
          >
            <input
              type="radio"
              name="filter"
              value={filter.value}
              checked={selectedFilter === filter.value}
              onChange={() => setFilter(filter.value)}
              className={`w-4 h-4 bg-gray-50 rounded-full ${selectedFilter === filter.value
                  ? "border-4 border-blue-700"
                  : "border-2 border-gray-300"
                }`}
            />
            <span className="self-stretch my-auto text-base text-gray-900">
              {filter.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

const TaskManager = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(token);
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, [token]);

  useEffect(() => {
    const applyFilter = () => {
      switch (filter) {
        case "done":
          setFilteredTasks(tasks.filter((task) => task.completed));
          break;
        case "undone":
          setFilteredTasks(tasks.filter((task) => !task.completed));
          break;
        default:
          setFilteredTasks(tasks);
      }
    };
    applyFilter();
  }, [filter, tasks]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    try {
      const newTask = await createTask({ title: newTaskTitle }, token);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const handleToggleTask = async (taskId) => {
    try {
      const updatedTask = await toggleTask(taskId, token);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId, token);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleUpdateTaskTitle = async (taskId) => {
    if (!editingTitle.trim()) {
      alert("Task title cannot be empty.");
      return;
    }
    try {
      const updatedTask = await updateTaskTitle(taskId, editingTitle, token);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        )
      );
      setEditingTaskId(null); // Đặt lại chế độ chỉnh sửa
      setEditingTitle(""); // Xóa input
    } catch (error) {
      console.error("Failed to update task title:", error);
      alert("Failed to update task title.");
    }
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center px-60 py-16 bg-blue-50 max-md:px-5">
      <div className="flex flex-col px-16 py-10 w-full bg-white rounded-3xl shadow-[0px_0px_48px_rgba(189,189,189,0.25)] max-md:px-5 max-md:max-w-full">
        <form className="task-input" onSubmit={handleCreateTask}>
          <div className="flex gap-4 items-center self-stretch my-auto text-base text-gray-600  ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfacc56ca4cd1befd2ff8c849e0346a130f679f1517a89308e00940640f5799d?placeholderIfAbsent=true&apiKey=7a3c0c6db776404c888c5b6f6be62ebf"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Add a new task..."
              className="w-full px-4 py-2 text-md border border-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Add new
          </button>
        </form>
        <hr className="my-5" />
        <FilterOptions selectedFilter={filter} setFilter={setFilter} />
        <ul className="space-y-2 pt-8" >
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
            >
              {editingTaskId === task._id ? (
                <div className="flex w-full items-center gap-2">
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    placeholder="Edit task title"
                    className="flex-grow w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={() => handleUpdateTaskTitle(task._id)}
                    className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-800 hover:text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setEditingTaskId(null); // Hủy chế độ chỉnh sửa
                      setEditingTitle("");
                    }}
                    className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task._id)}
                      className="form-checkbox border border-gray-300 rounded text-blue-500 focus:ring-blue-500"
                    />
                    <span
                      className={`text-sm ${task.completed ? "line-through text-gray-500" : ""
                        }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingTaskId(task._id); 
                        setEditingTitle(task.title); 
                      }}
                      className={`px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-800 hover:text-white ${task.completed ? "text-gray-400 border border-gray-200 pointer-events-none " : ""
                        }`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded-lg hover:bg-red-800 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
