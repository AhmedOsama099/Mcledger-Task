export interface IResponseData<T> {
  data: T;
  error: string;
  loading: boolean;
}

export type Props = {
  children: string | JSX.Element | JSX.Element[];
};
