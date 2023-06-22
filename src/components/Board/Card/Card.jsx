import css from "./Card.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../shared/buttons/Button/Button";
import { IconRemove } from "../../shared/icons/icon-remove";
import { useTasks } from "../../../hooks/tasks/use-tasks";
import { useEffect, useState } from "react";

export const Card = () => {
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();
  const { cardId } = useParams();
  const [task, setTask] = useState();
  const [isDescriptionTextShown, setIsDescriptionTextShown] = useState(true);

  useEffect(() => {
    if (cardId) {
      setTask(getTaskById(cardId));
    }
  }, [cardId, getTaskById]);

  const navigateBack = () => navigate(-1);

  return (
    <div className={css.card}>
      {task && (
        <div className={css.body}>
          <h1 className={css.name}>{task.name}</h1>
          {isDescriptionTextShown && (
            <p
              className={css.description}
              onClick={() => setIsDescriptionTextShown(false)}
            >
              {task.description
                ? task.description
                : "This task has no description"}
            </p>
          )}

          {!isDescriptionTextShown && (
            <div>
              <textarea
                className={css.editDescription}
                placeholder="Enter description"
                onChange={(e) =>
                  setTask({
                    ...task,
                    description: e.target.value,
                  })
                }
                value={task.description}
              />
              <button
                className={css.saveButton}
                onClick={() => {
                  updateTask(task);
                  setIsDescriptionTextShown(true);
                }}
              >
                Save Card
              </button>
            </div>
          )}
        </div>
      )}
      <Button className={css["button-close"]} onClick={navigateBack}>
        <IconRemove />
      </Button>
    </div>
  );
};
