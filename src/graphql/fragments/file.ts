import { gql } from "@apollo/client";

export const FileFragment = {
  default: gql`
    fragment FileFragment on File {
      id
      name
    }
  `,
  complete: gql`
    fragment FileFragmentComplete on File {
      id
      name
      width
      height
    }
  `,
};
