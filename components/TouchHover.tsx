"use client";
import { useEffect } from "react";

const TOUCH_RELEASE_MS = 650;

/** Mirrors card hover effects on touch devices by toggling `.is-touched`. */
export function TouchHover() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let active: Element | null = null;
    const clear = () => {
      active?.classList.remove("is-touched");
      active = null;
    };
    const onStart = (e: TouchEvent) => {
      const card = (e.target as Element | null)?.closest?.(".card-hover") ?? null;
      if (timer) clearTimeout(timer);
      if (active && active !== card) clear();
      if (card) {
        card.classList.add("is-touched");
        active = card;
      }
    };
    const onEnd = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(clear, TOUCH_RELEASE_MS);
    };
    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });
    document.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
      document.removeEventListener("touchcancel", onEnd);
      if (timer) clearTimeout(timer);
    };
  }, []);
  return null;
}
