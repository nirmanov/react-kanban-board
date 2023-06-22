import css from "./Header.module.scss";
import { Profile } from "./Profile/Profile";

export const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.header__title}>Kanban Board</h1>
      <Profile />
    </header>
  );
};
