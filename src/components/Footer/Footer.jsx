import css from "./Footer.module.scss";
import { useTasks } from "../../hooks/tasks/use-tasks";

export const Footer = (props) => {
  const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

  return (
    <footer className={css.footer}>
      <div className={css.counters}>
        <span>Active task: {getActiveTaskCount()}</span>
        <span>Finished task: {getFinishedTaskCount()}</span>
      </div>
      <div className={css.copy}>Kanban board by Vladislav N., 2023</div>
    </footer>
  );
};
