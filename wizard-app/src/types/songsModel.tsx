export interface IServerSongs {
  id: string;
  singerId: string;
  albumId: string;
  name: string;
  description: string;
  amount: number;
}

export interface IUISongs extends IServerSongs {
  isSelected: boolean;
}
