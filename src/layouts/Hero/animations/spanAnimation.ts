import gsap from "gsap";

interface Props{
    className: string,
    delay: number
}

export default function spanAnimation({className, delay}: Props){
    gsap.to(`.${className}`,{
        y: 0,
        ease: "elastic.out(1,9)",
        duration: 1,
        delay: delay,
        
    })

}