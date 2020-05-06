import React from 'react'
import Button from '../template/button'
import {connect} from 'react-redux'

const TodoList = props => {

    const montaLinhas = (lista) => {

        const list = lista || []

        return list.map(elem => (
            <tr key={elem._id}>
                <td className={elem.feito ? 'marqueFeito' : ''}> 
                    {elem.descricao}
                </td>
                <td className='tableActions'>
                    <Button icon='check' rendered={!elem.feito} styled='success'  handleAction={() => props.handleConcluido(elem)}/>
                    <Button icon='undo' rendered={elem.feito} styled='warning'  handleAction={() => props.handleNaoConcluido(elem)}/>
                    <Button icon='trash-o' rendered={elem.feito} styled='danger'  handleAction={() => props.handleRemove(elem)}/>
                </td>
            </tr>
        ))

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Ação
                    </th>
                </tr>               
            </thead>
            <tbody>
                {montaLinhas(props.list)}
            </tbody>
        </table>
    )

}

const mapStateToProps = state => (
    {
        list: state.todo.list.data
    }
)

export default connect(mapStateToProps)(TodoList)