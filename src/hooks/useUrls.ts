export function useUrls() {
  function getFileUrl(fileName: string) {
    return `${process.env.NEXT_PUBLIC_FILES_URL}/${fileName}`;
  }

  function getThumbnailUrl(fileName: string) {
    const [name, ext] = fileName.split(".");
    return `${process.env.NEXT_PUBLIC_FILES_URL}/${name}-thumbnail-240.${ext}`;
  }

  function formatPostUrl(url: string) {
    return `${window.location.origin}/p/${url}`;
  }

  return { getFileUrl, formatPostUrl, getThumbnailUrl };
}
