export type ApiResponseT<T> = {
  data: T;
  errors: string[] | null;
}