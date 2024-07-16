import { animationModalOut } from "./animations";
import styles from "./Modal.module.scss"
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
    productname: string | undefined 
    description: string | undefined
    price: number | undefined
    image: string | undefined
}

export default function Modal({productname,description,price, image}:Props) {
    return(
        <div className={styles.modal}>
            <h1 className={styles.title}>{productname}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price}</p>
            <img className={styles.image} src={image} alt="" />
            <button onClick={animationModalOut} className={styles.close}><AiFillCloseCircle /></button>
        </div>
    )
}