import { gql } from "@apollo/client";
import { FileFragment } from "./fragments/file";

export const SINGLE_UPLOAD_FILE = gql`
  ${FileFragment.complete}
  mutation singleUploadFile($file: Upload!) {
    singleUploadFile(file: $file) {
      ...FileFragmentComplete
    }
  }
`;
