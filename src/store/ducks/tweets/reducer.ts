import produce, {Draft} from 'immer'
import { TweetActions, TweetsActionsType } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetActions)=>{
    const {type, payload} = action;

    if (type === TweetsActionsType.SET_TWEETS){
        draft.items = payload
    }

}, initialTweetsState);