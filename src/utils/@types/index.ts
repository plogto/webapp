export type FormatCountTitle = (props: {
  singular: string;
  plural: string;
  count?: number;
}) => {
  title: string;
  count: number;
  text: string;
};
