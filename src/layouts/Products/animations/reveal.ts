import gsap from "gsap";
import styles from "../Products.module.scss"

export default function reveal(){
    gsap.to(`.${styles.products}`,{
        opacity: 1,
        delay: 3
    })
}