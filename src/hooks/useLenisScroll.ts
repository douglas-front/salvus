import { useContext } from "react";
import { LenisScrollContext } from "../contexts/lenisScrollProvider";

export default function useLenisScroll() {
  return useContext(LenisScrollContext);
}
