import styles from "./Nav.module.scss"

interface Props{
    menuOption: string
    link: string | null
}

export default function Menu({menuOption, link}: Props) {


    return(
        <menu className={styles.menu}>
            <li className={styles.management} onClick={()=> window.open(`/${link}`, "_blank")}>{menuOption}</li>
        </menu>
    )
}