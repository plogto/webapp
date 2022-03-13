export function useUrls() {
  function getFileUrl(fileName: string) {
    return `${process.env.NEXT_PUBLIC_FILES_URL}/${fileName}`;
  }

  return { getFileUrl };
}
