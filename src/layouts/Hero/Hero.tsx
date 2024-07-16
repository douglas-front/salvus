import useIsomorphicEffect from "../../hooks/useIsomorphicEffect";
import useLenisScroll from "../../hooks/useLenisScroll";
import styles from "./Hero.module.scss";
import spanAnimation from "./animations/spanAnimation";
import gsap from "gsap";
export default function Hero() {
  const lenis = useLenisScroll()
  useIsomorphicEffect(() => {
    spanAnimation({className: "spanInside_titleHero", delay: 4});
    spanAnimation({className:"spanInside_paragraphHero", delay: 4.3});

    gsap.to(`.${styles.image}`,{
      width: "100%",
      ease: "elastic.out(1,9)",
      duration: 3,
      delay: 3,
      onComplete: ()=>{
          lenis?.current.start()
      }
  })

    return()=>{
        gsap.killTweensOf(".spanInside_titleHero")
        gsap.killTweensOf(".spanInside_paragraphHero")
    }
  }, []);
  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.title}>
        <span className="spanInside_titleHero">Products</span>
      </h1>
      <p className={styles.paragraph}>
        <span className="spanInside_paragraphHero">The best products <br /> for your style</span>
      </p>
      <div className={styles.image}>
        <img src="/woman.jpg" alt="woman with bag" />
      </div>
    </section>
  );
}
