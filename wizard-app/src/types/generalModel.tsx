export interface IResponseData<T> {
  data: T;
  error: string;
  loading: boolean;
  selectedUsers: string[];
}

export type Props = {
  children: string | JSX.Element | JSX.Element[];
};
