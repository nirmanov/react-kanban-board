import css from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
      <span className={css.card__title}>{props.name}</span>
    </div>
  );
};
