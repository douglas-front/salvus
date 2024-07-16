import Menu from "./menu"
import styles from "./Nav.module.scss"

export default function Nav() {
    return(
        <nav className={styles.nav}>
            <Menu/>
        </nav>
    )
}