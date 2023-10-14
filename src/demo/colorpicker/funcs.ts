export function roundDec(n: number) {
  const ROUND = 10 ** 1;
  return Math.round(n * ROUND) / ROUND;
}

function padstr(str: string, chr: string, len: number): string {
  return (Array(len).join(chr) + str).slice(-len);
}

export const remainPositive = (n: number, div: number) =>
  ((n % div) + div) % div;

export const formatRGB = (r: number, g: number, b: number) =>
  `rgb(${r}, ${g}, ${b})`;

export const formatHex = (r: number, g: number, b: number) =>
  `#${padstr(r.toString(16), '0', 2)}${padstr(g.toString(16), '0', 2)}${padstr(
    b.toString(16),
    '0',
    2
  )}`;

export function nan0(n: number) {
  if (isNaN(n)) {
    return 0;
  } else {
    return n;
  }
}

export const parseHex = (s: string): [number, number, number] => {
  if (s.length == 4) {
    return [
      nan0(parseInt(s[1] + s[1], 16)),
      nan0(parseInt(s[2] + s[2], 16)),
      nan0(parseInt(s[3] + s[3], 16)),
    ];
  }
  return [
    nan0(parseInt(s.substring(1, 3), 16)),
    nan0(parseInt(s.substring(3, 5), 16)),
    nan0(parseInt(s.substring(5, 7), 16)),
  ];
};

export function getHue(r: number, g: number, b: number) {
  if (r == g && g == b) {
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
