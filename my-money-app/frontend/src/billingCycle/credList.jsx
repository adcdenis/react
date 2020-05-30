import React from 'react'
import Grid from '../common/layolt/grid'
import { Field } from 'redux-form'
import Input from '../common/form/Input'

class CredList extends React.Component {

    renderRows() {
        return (
            <tr>
                <td>
                    <Field name='credits[0].name' placeholder='Informe o nome' readOnly={this.props.readOnly}
                        component={Input} />
                </td>
                <td>
                    <Field name='credits[0].value' placeholder='Informe o valor' readOnly={this.props.readOnly}
                        component={Input} />
                </td>
                <td>
                    
                </td>
            </tr>
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
                                <th>Ações</th>
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