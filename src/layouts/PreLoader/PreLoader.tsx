import useIsomorphicEffect from "../../hooks/useIsomorphicEffect"
import useLenisScroll from "../../hooks/useLenisScroll"
import animationCircle from "./animations/animationCircle"
import animationLogo from "./animations/animationLogo"
import animationMain from "./animations/animationMain"
import animationOverlay from "./animations/animationOverlay"
import styles from "./PreLoader.module.scss"

export default function PreLoader() {
    useIsomorphicEffect(()=>{
            
        animationLogo()
        animationOverlay()
        animationCircle()
        animationMain()
    },[])

    return(
        <section className={styles.preLoader}>
            <div className={styles.logo}>
                <img src="/logo.webp" alt="" />
            </div>

            <div className={styles.overlay}></div>
            <div className={styles.circle}></div>
        </section>
    )
}