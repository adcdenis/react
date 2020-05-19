import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { selectTab } from './tabActions'

class TabHeader extends Component {
  render() {
    return (
      <li>       
        <a href data-toggle="tab" data-target={this.props.target}>
           <i className={`fa fa-${this.props.icon}`}></i>
          {this.props.label} 
        </a>
         
      </li>
    )
  }
}

const mapStateToProps = (state) => ({ tab: state.tab })
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)


