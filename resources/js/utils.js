export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

export const lerp = (value, a, b) => {
  return (1 - value) * a + value * b;
};
