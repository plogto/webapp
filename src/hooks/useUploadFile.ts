import { useMutation } from "@apollo/client";
import { SINGLE_UPLOAD_FILE } from "@graphql/uploadFile";
import type { SingleUploadFileMutation } from "@graphql/@types/uploadFile";

export function useUploadFile() {
  const [singleUploadFile, singleUploadFileResponse] =
    useMutation<SingleUploadFileMutation>(SINGLE_UPLOAD_FILE);

  return { singleUploadFile, singleUploadFileResponse };
}
