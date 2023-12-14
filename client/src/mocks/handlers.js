// ** MSW
import { http, HttpResponse } from 'msw'

// ** Mock Data
// import usersData from './data/users.json'
import cardData from './data/cards.json'
import cardsetData from './data/cardsets.json'
//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  http.get(`${baseUrl}/flashcards`, (info) => {
    const {
      request,
      params,
      cookies
    } = info
    return HttpResponse.json({message: 'flashcards found!', data: cardData.splice(0, 5), total: '5'}) // respond using a mocked JSON body
  }),
  http.get(`${baseUrl}/flashcardSets`, (info) => {
    const {
      request,
      params,
      cookies
    } = info
    return HttpResponse.json({message: 'flashcardsets found!', data: cardsetData.splice(0, 5), total: '5'}) // respond using a mocked JSON body
  }),
  // http.get(`${baseUrl}/quizzes`, (info) => {
  //   const {
  //       request,
  //       params,
  //       cookies
  //     } = info
  //   return HttpResponse.json({message: 'packs found!', data: packsData.splice(0, 9), total: '9'}) // respond using a mocked JSON body
  // }),
]