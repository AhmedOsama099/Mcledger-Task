export interface IServerAuthors {
  id: string;
  genreId: string;
  name: string;
  description: string;
  chaptersCount: number;
  amount: number;
}

export interface IUIAuthors extends IServerAuthors {
  isSelected: boolean;
}
