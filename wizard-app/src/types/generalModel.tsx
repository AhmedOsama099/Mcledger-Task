export interface IResponseData<T> {
  data: T;
  error: string;
  loading: boolean;
  selectedData: string[];
  prevData: string[];
}

export type Props = {
  children: string | JSX.Element | JSX.Element[];
};
