import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getList } from "./billingCycleAction"

class BillingCycleList extends React.Component {
  componentDidMount() {
    this.props.getList()
  }

  renderRows(){

    const list = this.props.list || []
    return list.map(bc=>(
      <tr key={bc._id}>
        <td>
          {bc.name}
        </td>
        <td>
          {bc.month}
        </td>
        <td>
          {bc.year}
        </td>
        
      </tr>
    ))
  }

  render() {
    console.log(this.props.list)
    return (
      <table className="table">
        <thead><tr><th>Nome</th><th>Mês</th><th>Ano</th></tr>
        </thead>
        <tbody>
          {this.renderRows()}          
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list })
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
