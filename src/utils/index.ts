import { Units } from "@/types";

export const convertNumbers = (num: number, unit: Units) => {
  switch (unit) {
    case 'P':
      return (num / 1000000000000000).toFixed(2);
    case 'T':
      return (num / 1000000000000).toFixed(2);
    case 'G':
      return (num / 1000000000).toFixed(2);
    case 'M':
      return (num / 1000000).toFixed(2);
    case 'K':
      return (num / 1000).toFixed(2);
    default:
      return (num).toFixed(2);
  }
};