export interface IResponseData<T> {
  data: T;
  error: string;
  loading: boolean;
}
