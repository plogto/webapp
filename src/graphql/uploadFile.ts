import { gql } from "@apollo/client";
import { FileFragment } from "./fragments/file";

export const UPLOAD_FILES = gql`
  ${FileFragment.complete}
  mutation uploadFiles($files: [Upload!]!) {
    uploadFiles(files: $files) {
      ...FileFragmentComplete
    }
  }
`;
