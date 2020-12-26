import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import highlightsReducer from '../reducers/highlights';
import podcastReducer from '../reducers/podcast';

export const rootReducer = combineReducers({
  highlights: highlightsReducer,
  podcast: podcastReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
