import styles from '../PreLoader.module.scss'
import gsap from 'gsap'

export default function animationOverlay(){
    gsap.to(`.${styles.overlay}`,{
        height: "100vh",
        duration: 1,
        ease: "elastic.out(1,9)",
        delay: 1.3
    })
}