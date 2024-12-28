export const formatNumber = (value: number): string => {
  if (Math.abs(value) < 0.0001 || Math.abs(value) > 9999) {
    return value.toExponential(4);
  }
  return value.toPrecision(6).replace(/\.?0+$/, '');
};

export const formatUnit = (unit: string): string => {
  return unit.replace(/\*\*/g, '^')
    .replace(/\*/g, '⋅')
    .replace(/ /g, '');
};