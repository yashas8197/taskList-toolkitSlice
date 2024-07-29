import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, statusButtonPresses } from "./taskSlice";
import { useEffect } from "react";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state);

  const { tasks, status, error } = tasksState;

  const handleOnClick = (taskId) => {
    dispatch(statusButtonPresses(taskId));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div>
      {status === "Pending" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tasks.tasks.map((task, i) => (
        <div key={i}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((t) => (
              <li key={t.taskId}>
                <p>{t.task}</p>
                <button onClick={() => handleOnClick(t.taskId, t.task)}>
                  {t.taskStatus}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
