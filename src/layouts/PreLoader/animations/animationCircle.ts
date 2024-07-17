import styles from '../PreLoader.module.scss'
import gsap from 'gsap'

export default function animationCircle(){
    gsap.to(`.${styles.circle}`,{
        scale: window.matchMedia("(max-width: 820px)").matches ? 10 : 5,
        duration: 4,
        ease: "elastic.out(1,9)",
        delay: 2.3
    })
}