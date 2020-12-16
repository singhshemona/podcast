import { createStore } from 'redux'

const house = {
    data: [],
    currentPodcast: 0,
}

const reducer = (state = house, action) => {
    if (action.type === 'SEND_DATA') {
      return Object.assign({}, state, {
        data: action.payload
      })
    } else if (action.type === 'SET_ID') {
      return Object.assign({}, state, {
        currentPodcast: action.payload
      })
  }

    return state
}

const store = createStore(reducer)

export default store