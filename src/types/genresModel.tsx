export interface IServerGenres {
  id: string;
  name: string;
  authorCount: number;
  chaptersCount: number;
  amount: number;
}

export interface IUIGenres extends IServerGenres {
  isSelected: boolean;
}
