import useLenisScroll from "../../hooks/useLenisScroll"
import styles from "./Nav.module.scss"

export default function Menu() {

    const lenis = useLenisScroll()

    return(
        <menu className={styles.menu}>
            <li className={styles.management} onClick={()=> lenis?.current.scrollTo("#products")}>Products</li>
            <li className={styles.management} onClick={()=> window.open("/management", "_blank")}>Management</li>
        </menu>
    )
}