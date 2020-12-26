export const GET_PODCAST_DETAILS = 'CREATE_HIGHLIGHT';
export const SET_PODCAST_ID = 'SET_PODCAST_ID';

export const getPodcastDetails = (details) => {
  return async dispatch => {
    // any async code you want here
    // const response = await fetch('https://podcast-9afac-default-rtdb.firebaseio.com/highlights.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     note,
    //     podcastID,
    //     timestamp
    //   })
    // })
    
    // const resData = await response.json()
    // console.log(resData)

    dispatch ({
      type: GET_PODCAST_DETAILS,
      podcastDetails
    })
  }
}

export const setPodcastId = podcastId => {
  return { pid: podcastId };
};
