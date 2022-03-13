import { useState } from "react";

export function useUploadImages() {
  const [avatarPreview, setAvatarPreview] = useState<Blob>();
  const [backgroundPreview, setBackgroundPreview] = useState<Blob>();

  return {
    avatarPreview,
    setAvatarPreview,
    backgroundPreview,
    setBackgroundPreview,
  };
}
