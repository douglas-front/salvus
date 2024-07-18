import Menu from "./menu";
import styles from "./Nav.module.scss";

interface Props {
  menuOption: string;
  link: string;
}

export default function Nav({ menuOption, link }: Props) {
  return (
    <nav className={styles.nav}>
      <Menu menuOption={menuOption} link={link} />
    </nav>
  );
}
