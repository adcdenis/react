import React from "react"
import Button from "../template/button"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { changeDescription, search, add } from './todoAction'


class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)

  }

  componentDidMount() {   
    this.props.search()
  }

  keyHandler(e) {

    const { handleSearch, description, add } = this.props

    if (e.key === "Enter") {
      e.shiftKey ? handleSearch() : add(description);
    } else if (e.key === "Escape") {
      this.handleClear();
    }
  }

  render() {
    return (
      <div role="form" className="todoForm">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input
                  className="form-control"
                  placeholder="digite aqui uma tarefa"
                  onChange={this.props.changeDescription}
                  value={this.props.description}
                  onKeyUp={this.keyHandler}
                />
              </td>
              <td className="tableActions">
                <Button
                  icon="search"
                  rendered={true}
                  styled="info"
                  handleAction={this.props.handleSearch}
                />
                <Button
                  icon="plus"
                  rendered={true}
                  styled="primary"
                  handleAction={() => this.props.add(this.props.description)}
                />
                <Button icon="close"
                  rendered={true}
                  styled="default"
                  handleAction={this.props.handleClear}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

  }

}


const mapStateToProps = state => ({
  description: state.todo.description,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeDescription, search, add }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
