const INITIAL_STATE = {
    description: "teste de reducer",
    list: [
        {
            _id: 1,
            descricao: "Redux Inicial",
            feito: false,
        },
        {
            _id: 2,
            descricao: "Redux 2",
            feito: true,
        },
    ],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default: return state
    }
}