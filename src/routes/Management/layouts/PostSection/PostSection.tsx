import Form from "./Form"
import styles from "./PostSection.module.scss"

export default function PostSection() {
    return(
        <section className={styles.PostSection}>
            <h1 className={styles.title}>Post</h1>
            <Form/>
        </section>
    )
}