export interface IServerSingers {
  id: string;
  name: string;
  albumsCount: number;
  songsCount: number;
  amount: number;
}

export interface IUISingers extends IServerSingers {
  isselected: boolean;
}
