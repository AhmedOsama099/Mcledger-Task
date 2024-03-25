export interface IServerSongs {
  id: string;
  singerId: string;
  albumId: string;
  name: string;
  description: string;
  amount: number;
}

export interface IServerSongsList {
  albumTitle: string;
  albumDescription: string;
  data: IServerSongs[];
}

export interface IUISongs extends IServerSongs {
  isSelected: boolean;
}

export interface IUISongsList {
  albumTitle: string;
  albumDescription: string;
  data: IUISongs[];
}
