import styles from "../Modal.module.scss"
import gsap from "gsap";

interface Props {
    productname: string
    description: string
    price: number
    state: any
    image: string
}

export  function animationModal({state, productname,description,price, image}: Props){
    gsap.to(`.${styles.modal}`,{
        opacity: 1,
        width: "100vw",
        duration: 1,
        ease: "elastic.out(1,9)"
    })

    state({productname,description,price, image})
}
export function animationModalOut(){
    gsap.to(`.${styles.modal}`,{
        opacity: 0,
        width: "0vw",
        duration: 1,
        ease: "elastic.out(1,9)"
    })

}