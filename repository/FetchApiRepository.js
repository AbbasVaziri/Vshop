import Constants from '../Configuration/Constans'

export const GETT = (url) => {
  return fetch(`${Constants.RES_API_ADDRESS}${url}`)
}