import React from 'react'
import Button from '../template/button'

export default props => {

    const montaLinhas = (lista) => {

        const list = lista || []

        return list.map(elem => (
            <tr key={elem._id}>
                <td>
                    {elem.descricao}
                </td>
                <td>
                    <Button icon='trash-o' rendered={true} styled='danger'  handleAction={() => props.handleRemove(elem)}/>
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