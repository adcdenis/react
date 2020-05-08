import React from 'react'
import Button from '../template/button'
import {connect} from 'react-redux'
import { remove, concluido, desfazer } from './todoAction'
import { bindActionCreators } from 'redux'

const TodoList = props => {

    const montaLinhas = (lista) => {

        const list = lista || []

        return list.map(elem => (
            <tr key={elem._id}>
                <td className={elem.feito ? 'marqueFeito' : ''}> 
                    {elem.descricao}
                </td>
                <td className='tableActions'>
                    <Button icon='check' rendered={!elem.feito} styled='success'  handleAction={() => props.concluido(elem)}/>
                    <Button icon='undo' rendered={elem.feito} styled='warning'  handleAction={() => props.desfazer(elem)}/>
                    <Button icon='trash-o' rendered={elem.feito} styled='danger'  handleAction={() => props.remove(elem)}/>
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({ concluido, remove, desfazer }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)