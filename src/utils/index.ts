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

export const convertMsToTime = (ms: number) => {
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
}