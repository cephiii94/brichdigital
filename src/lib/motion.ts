// Shared animation transition presets for Framer Motion
// Using named easing strings to satisfy strict TypeScript types

import type { Transition } from "framer-motion";

export const transition = (delay = 0, duration = 0.55): Transition => ({
  duration,
  delay,
  ease: "easeOut",
});
