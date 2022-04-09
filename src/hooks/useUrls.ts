export function useUrls() {
  function getFileUrl(fileName: string) {
    return `https://${process.env.NEXT_PUBLIC_FILES_URL}/${fileName}`;
  }

  return { getFileUrl };
}
