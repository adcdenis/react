import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends React.Component {

  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
      sumOfDets: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
    }
  }


  render() {
    const { handleSubmit, credits, debts } = this.props
    const { sumOfCredits, sumOfDets } = this.calculateSummary()

    return (
      <form onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Nome'
            cols='12 4'
            placeholder='Informe o nome'
            readOnly={this.props.readOnly}
          />
          <Field
            name='month'
            component={LabelAndInput}
            label='Mês'
            cols='12 4'
            placeholder='Informe o mês'
            readOnly={this.props.readOnly}
          />
          <Field
            name='year'
            component={LabelAndInput}
            label='Ano'
            cols='12 4'
            placeholder='Informe o ano'
            readOnly={this.props.readOnly}
          />
          <Summary debt={sumOfDets} credit={sumOfCredits} />
          <ItemList cols='12 6' readOnly={this.props.readOnly} list={credits} legend='Créditos' field='credits' />
          <ItemList cols='12 6' readOnly={this.props.readOnly} list={debts} legend='Débitos' field='debts' showStatus={true} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.icon}`}>
            {this.props.buttonLabel}
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
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
