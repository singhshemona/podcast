import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import highlightsReducer from '../reducers/highlights';

const rootReducer = combineReducers({
  highlights: highlightsReducer
});

// export const central = {
//     data: [],
//     currentPodcast: 0,
//     highlights: {}
// }

// const reducer = (state = central, action) => {
//     if (action.type === 'SEND_DATA') {
//       return Object.assign({}, state, {
//         data: action.payload
//       })
//     } else if (action.type === 'SET_ID') {
//       return Object.assign({}, state, {
//         currentPodcast: action.payload
//       })
//     } else if (action.type === 'CREATE_HIGHLIGHT') {
//       return Object.assign({}, state, {
//         highlights: state.highlights.concat(action.payload)
//       })
//   }
//     return state
// }

// const store = createStore(reducer, applyMiddleware(ReduxThunk))

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store
