import type { Attachment } from "@t/attachment";

export interface UploadFilesMutation {
  uploadFiles: Attachment[];
}
export interface UploadFilesMutationRequest {
  files: Blob[];
}
