export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  NEVER = 'NEVER'
}

export interface Tag {
  _id: string;
  name: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  loadingState: LoadingState;
}