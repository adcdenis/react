import React from "react"
import { connect } from "react-redux"
import If from "../operador/if"

class TabContent extends React.Component {
  render() {

    const selected = this.props.tab.selected === this.props.id
    const visible = this.props.tab.visible[this.props.id]

    return (
        <If rendered={visible}>
            <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>{this.props.children}</div>
        </If>
    )
  }
}

const mapStateToProps = (state) => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)
