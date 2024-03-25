export interface IServerAlbums {
  id: string;
  singerId: string;
  name: string;
  description: string;
  songsCount: number;
  amount: number;
}

export interface IUIAlbums extends IServerAlbums {
  isSelected: boolean;
}
