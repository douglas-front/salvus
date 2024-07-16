import styles from '../PreLoader.module.scss'
import gsap from 'gsap'

export default function animationCircle(){
    gsap.to(`.${styles.circle}`,{
        scale: 5,
        duration: 4,
        ease: "elastic.out(1,9)",
        delay: 2.3
    })
}