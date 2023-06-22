import { Column } from "./Column/Column";
import css from "./Board.module.scss";
import { useTasks } from "../../hooks/tasks/use-tasks";

export const Board = () => {
  const { states } = useTasks();

  return (
    <div className={css.board}>
      {states.map((state) => (
        <Column key={state.id} name={state.name} state={state.state} />
      ))}
    </div>
  );
};
