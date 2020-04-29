import React from 'react'

export default props => {

    const montaLinhas = (lista) => {
        const list = lista || []

        list.map(elem => (
            <tr>
                <td>
                    elem.descricao
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
                </tr>
            </thead>
            <tbody>
                {montaLinhas(props.list)}
            </tbody>
        </table>
    )

}