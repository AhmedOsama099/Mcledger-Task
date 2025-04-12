export interface IResponseData<T> {
  data: T;
  error: string;
  selectedData: string[];
  prevData: string[];
}

export type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IDetails {
  chaptersTotal: number;
  amountTotal: number;
}

export interface IPersonalDetails {
  name: "";
  email: "";
  mobile: "";
}

export interface ILoading {
  loading: boolean;
}

export interface IErrorHandle {
  error: string;
}
