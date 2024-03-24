export interface IAPIReturn<T> {
  data: T | null;
  error: string;
}
