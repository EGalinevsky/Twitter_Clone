import { Tweet } from "../../tweets/contracts/state";

export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  NEVER = 'NEVER'
}
export interface TweetState {
  data?: Tweet;
  loadingState: LoadingState;
}