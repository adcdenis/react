import React from 'react'
import Grid from '../common/layolt/grid'
import { Field } from 'redux-form'
import Input from '../common/form/Input'

class CredList extends React.Component {

    add(index, item = {}) {
        if(!this.props.readOnly) {
            console.log(index);
        }
    }

    renderRows() {

        const list = this.props.list || []

        return list.map(
            (credits, index) => (
                <tr key={index}>
                    <td>
                        <Field name={`credits[${index}].name`} placeholder='Informe o nome' readOnly={this.props.readOnly}
                            component={Input} />
                    </td>
                    <td>
                        <Field name={`credits[${index}].value`} placeholder='Informe o valor' readOnly={this.props.readOnly}
                            component={Input} />
                    </td>
                    <td>
                        <button type='button' className='btn btn-success' onClick={()=> this.add(index + 1)} ><i className='fa fa-plus'></i></button>
                    </td>
                </tr>
            )
        )
    }

    render() {

        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


export default CredList;