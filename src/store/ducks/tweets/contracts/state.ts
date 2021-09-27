export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  NEVER = 'NEVER'
}

export interface Tweet {
  _id: string
    text: string
    user: {
      fullName: string;
      userName: string;
      avatarUrl: string;
    } 
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
}