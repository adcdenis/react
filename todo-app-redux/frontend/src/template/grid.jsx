import React from 'react'

export default class Grid extends React.Component {

    render() {

        return (
            <div className={`col-xs-${this.props.xs} col-sm-${this.props.sm} col-md-${this.props.md}`}>
                {this.props.children}
            </div>
        )
    }
}