export type ApiResponseT<T> = {
  data: T;
  errors: string[] | null;
}

export type ConstantT<T> = {
  name: string;
  value: T;
}