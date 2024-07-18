import { useEffect, useLayoutEffect } from "react";

const isServerRendering = typeof window === "undefined";

const useIsomorphicEffect = isServerRendering ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;
