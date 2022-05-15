import { useMutation } from "@apollo/client";
import type { SingleUploadFileMutation } from "@graphql/@types/uploadFile";
import { SINGLE_UPLOAD_FILE } from "@graphql/uploadFile";

export function useUploadFile() {
  const [singleUploadFile, singleUploadFileResponse] =
    useMutation<SingleUploadFileMutation>(SINGLE_UPLOAD_FILE);

  return { singleUploadFile, singleUploadFileResponse };
}
