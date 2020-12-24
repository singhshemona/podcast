export const CREATE_HIGHLIGHT = 'CREATE_HIGHLIGHT';

export const createHighlight = (note, podcastID, timestamp) => {
  return async dispatch => {
    // any async code you want here
    const response = await fetch('https://podcast-9afac-default-rtdb.firebaseio.com/highlights.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        note,
        podcastID,
        timestamp
      })
    })
    
    const resData = await response.json()
    console.log(resData)

    dispatch ({
      type: CREATE_HIGHLIGHT,
      highlightData: {
        id: resData.name,
        note,
        podcastID,
        timestamp
      }
    })
  }
}