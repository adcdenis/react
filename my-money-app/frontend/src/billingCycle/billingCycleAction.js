import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
//import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}]}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  }
}

export function create(values) {
  return invoker(values, 'post')
}

export function showEditar(billingCycle) {
  return [
    selectTab('tabUpdate'),
    showTabs('tabUpdate'),
    initialize('billingCycleForm', billingCycle),
  ]
}

export function showDelete(billingCycle) {
  return [
    selectTab('tabDelete'),
    showTabs('tabDelete'),
    initialize('billingCycleForm', billingCycle),
  ]
}

export function init() {
  return [
    selectTab('tabList'),
    showTabs('tabList', 'tabCreate'),
    initialize('billingCycleForm', INITIAL_VALUES),
    getList()
  ]
}

export function update(values) {
  return invoker(values, 'put')
}

export function excluir(values) {
  return invoker(values, 'delete')
}

function invoker(values, method) {
  return (dispatch) => {
    const value_id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${value_id}`, values)
      .then((resp) => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        dispatch([init()])
      })
      .catch((e) => {
        e.response.data.errors.forEach((element) => {
          toastr.error('Erro', element)
        })
      })
    return {
      type: 'TEMP',
    }
  }
}
