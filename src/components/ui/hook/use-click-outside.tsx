import { useEffect, type RefObject } from "react";

export default function useClickOutside<T extends HTMLElement>(
  refs: RefObject<T>[],
  onClickOutside: () => void,
  events: Array<keyof DocumentEventMap> = ["mousedown", "touchstart"]
): void {
  useEffect(() => {
    const isOutside = (target: EventTarget | null): boolean => {
      if (!(target instanceof Node)) return false;
      return refs.every(
        (ref) => ref.current !== null && !ref.current.contains(target)
      );
    };

    const handleClick = (event: Event): void => {
      if (isOutside(event.target)) {
        onClickOutside();
      }
    };

    // attach all passed-in events
    events.forEach((eventName) =>
      document.addEventListener(eventName, handleClick)
    );

    return () => {
      events.forEach((eventName) =>
        document.removeEventListener(eventName, handleClick)
      );
    };
  }, [refs, onClickOutside, events]);
}