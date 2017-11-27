export const filterPhrase = (phrase) => {
  return {
    type: 'UPDATE_FILTER_PHRASE',
    payload: phrase
  }
}
