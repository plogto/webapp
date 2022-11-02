export function isWindowExists() {
  return typeof window !== "undefined";
}

export function isDocumentExists() {
  return typeof document !== "undefined";
}

export function isDataLoading(called: boolean, loading: boolean) {
  return called === loading;
}
