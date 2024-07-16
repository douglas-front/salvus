export default function lerp(f0: number, f1: number, t: number) {
    return (1 - t) * f0 + f1 * t
}