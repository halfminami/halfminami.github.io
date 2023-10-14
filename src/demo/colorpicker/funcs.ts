export function roundDec(n: number) {
  const ROUND = 10 ** 1;
  return Math.round(n * ROUND) / ROUND;
}

export const formatRGB = (r: number, g: number, b: number) =>
  `rgb(${r}, ${g}, ${b})`;

export const formatHex = (r: number, g: number, b: number) =>
  `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

export function getHue(r: number, g: number, b: number) {
  if ((r == 0 && g == 0 && b == 0) || (r == 0xff && g == 0xff && b == 0xff)) {
    return 0; // red
  }
  // https://en.wikipedia.org/wiki/Hue#Defining_hue_in_terms_of_RGB
  if (r >= g && g >= b) {
    return (60 * (g - b)) / (r - b);
  } else if (g > r && r >= b) {
    return 60 * (2 - (r - b) / (g - b));
  } else if (g >= b && b > r) {
    return 60 * (2 + (b - r) / (g - r));
  } else if (b > g && g > r) {
    return 60 * (4 - (g - r) / (b - r));
  } else if (b > r && r >= g) {
    return 60 * (4 + (r - g) / (b - g));
  } else if (r >= b && b > g) {
    return 60 * (6 - (b - g) / (r - g));
  } else {
    throw new Error('Hue conversion failed!!');
  }
}
