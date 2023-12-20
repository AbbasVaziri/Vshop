import axios from 'axios'
import Constants from '../Configuration/Constans'

export const GET = (url) => {
  return axios.get(`${Constants.RES_API_ADDRESS}${url}`)
}

export const POST = (url , requestBody) => {
  return axios.post(`${Constants.RES_API_ADDRESS}${url}` , requestBody , {
    headers:
    {
      "Content-Type": "application/json"
    }
  })
}