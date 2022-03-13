import { gql } from "@apollo/client";

export const SINGLE_UPLOAD_FILE = gql`
  mutation singleUploadFile($file: Upload!) {
    singleUploadFile(file: $file) {
      name
    }
  }
`;
