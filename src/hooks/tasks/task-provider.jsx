import { TaskContext } from "./task-context";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [states] = useState([
    { id: 1, name: "backlog", state: "backlog" },
    { id: 2, name: "ready", state: "ready" },
    { id: 3, name: "in progress", state: "inProgress" },
    { id: 4, name: "finished", state: "finished" },
  ]);

  const findById = (id) => tasks.find((task) => task.id === id);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
    setIsLoaded(true);
  }, []);

  const context = {
    states,
    addTask: (name) => {
      const task = {
        id: uniqid(),
        name,
        state: "backlog",
      };
      setTasks([...tasks, task]);
    },
    updateTask: (item) => {
      const task = findById(item.id);
      task.name = item.name;
      task.description = item.description;
      setTasks([...tasks]);
    },
    removeTask: (id) => {
      const task = findById(id);
      if (task) {
        setTasks([...tasks.filter((item) => item.id !== task.id)]);
      }
    },
    getTaskById: findById,
    getTasksByState: (state) => {
      return tasks.filter((task) => task.state === state);
    },
    getTasksByPrevState: (currentState) => {
      const currentStateIndex = states.findIndex(
        (s) => s.state === currentState
      );
      const prevState =
        currentStateIndex > 0 ? states[currentStateIndex - 1].state : null;
      return tasks.filter((task) => task.state === prevState);
    },
    moveTask: (id, state) => {
      const task = findById(id);
      if (task) {
        task.state = state;
      }
      setTasks([...tasks]);
    },
    getActiveTaskCount: () =>
      tasks.filter((task) => task.state === "backlog").length,
    getFinishedTaskCount: () =>
      tasks.filter((task) => task.state === "finished").length,
  };

  return (
    <TaskContext.Provider value={context}>
      {isLoaded && props.children}
    </TaskContext.Provider>
  );
};
