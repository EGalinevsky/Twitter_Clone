import { TagsActionsType, setTagsLoadingState, setTags } from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects'
import { LoadingState, Tag } from './contracts/state';
import { TagsApi } from '../../../services/api/tagsApi';

// ...

// Our worker Saga: will perform the async increment task
export function* fetchTagsRequest(): Generator<unknown, void, Tag[]> {
  try {
    const items: Tag[] = yield call(TagsApi.fetchTags);
   yield put(setTags(items))
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR))
  } 
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}