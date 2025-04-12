export interface IServerChapters {
  id: string;
  genreId: string;
  authorId: string;
  name: string;
  description: string;
  amount: number;
}

export interface IServerChaptersList {
  authorTitle: string;
  authorDescription: string;
  data: IServerChapters[];
}

export interface IUIChapters extends IServerChapters {
  isSelected: boolean;
}

export interface IUIChaptersList {
  authorTitle: string;
  authorDescription: string;
  data: IUIChapters[];
}
