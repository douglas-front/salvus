import styles from "./ProductCard.module.scss"

interface Props{
  productname: string
  price: number
  click: () => void
  image: string
}

export default function ProductCard({productname, price, click, image}:Props) {
  return (
    <figure className={styles.card} data-slide-item onClick={()=> click()} title="click for see more">
      <img className={styles.image} src={image} alt="" />
      <div className={styles.info}>
        <small>{productname}</small>
        <small>{price}</small>
      </div>
    </figure>
  )
}