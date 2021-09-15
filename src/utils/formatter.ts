import { FormatCountTitle } from "./@types";

export const formatCountTitle: FormatCountTitle = ({
  singular,
  plural,
  count,
}) => {
  if (count == 1) {
    return {
      text: `${count} ${singular}`,
      title: singular,
      count,
    };
  }
  return {
    text: `${count} ${plural}`,
    title: plural,
    count: count || 0,
  };
};
