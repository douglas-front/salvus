import useLenisScroll from "../../hooks/useLenisScroll";
import styles from "./Footer.module.scss";

export default function Footer() {
  const lenis = useLenisScroll();
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>salvus</h1>

      <div className={styles.sitemap}>
        <h2>sitemap</h2>
        <p onClick={() => lenis?.current.scrollTo("#products")}>products</p>
        <a href="/management" target="_blank">
          management
        </a>
      </div>
    </footer>
  );
}
