import {
  CREATE_HIGHLIGHT
} from '../actions/highlights';
import Highlight from '../../models/highlight';

const initialState = {
  allHighlights: [
    new Highlight(
      '0',
      'Wow this podcast is so fun',
      '4d3fe717742d4963a85562e9f84d8c79',
      304.56
    ),
    new Highlight(
      '1',
      'More notes! Yayyyy woohoo.',
      '4d3fe717742d4963a85562e9f84d8c79',
      204.53
    )
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HIGHLIGHT:
      const newHighlight = new Highlight(
        action.highlightData.id,
        action.highlightData.note,
        action.highlightData.podcastID,
        action.highlightData.timestamp,
      );
      return {
        ...state,
        allHighlights: state.allHighlights.concat(newHighlight),
      };
    default: 
      return state 
  }
};