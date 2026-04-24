export type NextPagePropsT = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
  params: Promise<{ [key: string]: string | string[] }>;
};

export type ApiResponseT<T> = {
  data: T;
  errors: string[] | null;
}

export type ConstantT<T> = {
  name: string;
  value: T;
}

export type PeriodT = "daily" | "weekly" | "monthly" | "annual";