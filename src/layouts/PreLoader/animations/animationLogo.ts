import styles from '../PreLoader.module.scss'
import gsap from 'gsap'

export default function animationLogo(){
    gsap.to(`.${styles.logo}`,{
        scale: 1,
        duration: 1,
        ease: "elastic.out(1,9)",
        delay: 0.3
    })
}
