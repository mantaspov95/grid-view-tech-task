const getColorIntensity = (): number => {
  return Math.floor(Math.random() * 256);
};

export const getRandomRgbaColor = (): string => {
  const r = getColorIntensity();
  const g = getColorIntensity();
  const b = getColorIntensity();
  const a = 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
