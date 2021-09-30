import { FetchTweetDataActionInterface, SetTweetDataActionInterface, setTweetDataLoadingStateInterface, TweetActionsType } from './contracts/actionTypes';
import { LoadingState, TweetState } from './contracts/state';


//========================================>

export const setTweetData = ( payload: TweetState['data']): SetTweetDataActionInterface =>({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});
export const setTweetLoadingState = ( payload: LoadingState): setTweetDataLoadingStateInterface =>({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
});
export const fetchTweetData = (payload: string): FetchTweetDataActionInterface =>({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
});

export type TweetActions = 
| SetTweetDataActionInterface  
| FetchTweetDataActionInterface
| setTweetDataLoadingStateInterface
