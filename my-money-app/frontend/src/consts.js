export default {

  //API_URL: 'https://adcdenis-my-money-app-backend.herokuapp.com/api',
  //OAPI_URL: 'https://adcdenis-my-money-app-backend.herokuapp.com/oapi'

  API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3003/api' : 'https://adcdenis-my-money-app-backend.herokuapp.com/api',
  OAPI_URL: process.env.NODE_ENV === 'development'? 'http://localhost:3003/oapi' : 'https://adcdenis-my-money-app-backend.herokuapp.com/oapi'
}
