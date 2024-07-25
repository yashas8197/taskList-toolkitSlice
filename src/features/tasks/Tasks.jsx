import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.tasks.map((task) => (
        <div key={task.taskId}>
          <h2>{task.taskDate}</h2>
          <ul>
            {task.taskList.map((t, i) => (
              <li key={i}>
                <p>{t.task}</p>
                <p>Status: {t.status}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
