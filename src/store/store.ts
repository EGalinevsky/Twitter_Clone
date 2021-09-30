import { TweetState } from './ducks/tweet/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetsState } from './ducks/tweets/contracts/state';
import { rootReducer } from './rootReducer';
import {compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
    tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)
