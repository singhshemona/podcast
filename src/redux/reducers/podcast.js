import {
  GET_PODCAST_DETAILS,
  SET_PODCAST_ID
} from '../actions/podcast';

const initialState = {
  podcastDetails: [],
  currentPodcastId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PODCAST_DETAILS:
      return Object.assign({}, state, {
        podcastDetails: action.payload
      })
    case SET_PODCAST_ID:
      return Object.assign({}, state, {
        currentPodcastId: action.payload
      })
    default:
      return state 
  }
};