import { gql } from "@apollo/client";

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;
