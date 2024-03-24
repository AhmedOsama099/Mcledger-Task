export interface IServerSingers {
  id: string;
  name: string;
  albumsCount: number;
  songsCount: number;
  amount: number;
}

export interface IUISingers extends IServerSingers {
  isSelected: boolean;
}

export interface ISingerCard extends IUISingers {
  handleChange: (id: string, value: boolean) => void;
}
