import { useMutation } from "@apollo/client";
import type {
  UploadFilesMutation,
  UploadFilesMutationRequest,
} from "@graphql/@types/uploadFile";
import { UPLOAD_FILES } from "@graphql/uploadFile";

export function useUploadFiles() {
  const [uploadFiles, uploadFilesResponse] = useMutation<
    UploadFilesMutation,
    UploadFilesMutationRequest
  >(UPLOAD_FILES);

  return { uploadFiles, uploadFilesResponse };
}
