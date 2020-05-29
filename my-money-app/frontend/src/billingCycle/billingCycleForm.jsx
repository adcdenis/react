import React from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class BillingCycleForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Nome'
            cols='12 4'
            placeholder='Informe o nome'
          />
          <Field
            name='month'
            component={LabelAndInput}
            label='Mês'
            cols='12 4'
            placeholder='Informe o mês'
          />
          <Field
            name='year'
            component={LabelAndInput}
            label='Ano'
            cols='12 4'
            placeholder='Informe o ano'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>
            Salvar
          </button>
          <button type='button' className='btn btn-default' onClick={this.props.init}  >
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

//export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
BillingCycleForm =  reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps,)(BillingCycleForm);
