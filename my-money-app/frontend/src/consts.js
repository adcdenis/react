export default {

  API_URL: process.env.AMBIENTE ? 'https://adcdenis-my-money-app-backend.herokuapp.com/api' : 'http://localhost:3003/api',
  OAPI_URL: process.env.AMBIENTE ? 'https://adcdenis-my-money-app-backend.herokuapp.com/oapi' : 'http://localhost:3003/oapi'
}
