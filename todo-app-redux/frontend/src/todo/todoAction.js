import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => (
    {
        type : 'DESCRIPTION_CHANGED',
        payload : event.target.value
    }
)

export const search = () => {   

    const request = axios.get(`${URL}?sort=-dataCriacao`)//.then(result => {
        //console.log('++++search sendo chamado2')
       // console.log(result.data)} )

    return {
        type: 'TODO_SEARCHED',
        payload : request
    }

}

export const add = (descricao) => {   

    const request = axios.post(URL, { descricao })    

    return [
        {
        type: 'ADD',
        payload : request
        },
        search()
    ]

}