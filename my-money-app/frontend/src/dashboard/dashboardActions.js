import axios from 'axios'
import Consts from '../../src/consts'

export function getSummary() {
  const request = axios.get(`${Consts.API_URL}/billingCycles/summary`)
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request,
  }
}
