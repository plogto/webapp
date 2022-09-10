import type { Attachment } from "@t/attachment";

export interface ImgProps {
  image: Omit<Attachment, "id">;
  alt: string;
}
