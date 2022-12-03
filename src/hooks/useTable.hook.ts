import { useRef, useEffect, useMemo, useCallback } from "react";
import { IContacts } from "../types/data.types";

export const useTable = (data: IContacts[], fetchNextPage: () => void) => {
  const containerRef = useRef(null);
  const callBack = useCallback(
    (entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage]
  );
  const options = useMemo(
    () => ({
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (containerRef.current) observer.observe(containerRef.current);
  }, [data, fetchNextPage, options, callBack]);

  return { containerRef };
};
