import { useRef, useEffect, useMemo, useCallback } from "react";
import { IContact } from "../types/data.types";
import ReactTooltip from "react-tooltip";

export const useTable = (
  data: IContact[],
  fetchNextPage: () => void,
  hasNextPage?: boolean
) => {
  const containerRef = useRef(null);
  const callBack = useCallback(
    (entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
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
    ReactTooltip.rebuild();
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [data, fetchNextPage, options, callBack]);

  return { containerRef };
};
