export function useUrls() {
  function getFileUrl(fileName: string) {
    return `https://${process.env.NEXT_PUBLIC_FILES_URL}/${fileName}`;
  }

  function formatPostUrl(url: string) {
    return `${window.location.origin}/p/${url}`;
  }

  return { getFileUrl, formatPostUrl };
}
