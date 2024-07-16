import styles from '../PreLoader.module.scss'
import gsap from 'gsap'

export default function animationMain(){
    gsap.to(`.${styles.preLoader}`,{
        display: "none",
        delay: 2.5,

    })
}