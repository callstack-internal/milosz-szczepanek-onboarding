export const capitalizeFirstLetters = (text: string): string => {
  return text.replace(/\b\w/g, char => char.toUpperCase());
};
