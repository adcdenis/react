const INITIAL_STATE = {
    description: '',
    list: [ ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
                return { ...state, list: action.payload }
        case 'ADD':
                return { ...state, description: '' }
        case 'LIMPAR':
                return { ...state, description: action.payload }
        case 'LIMPAR_INPUT':
                return { ...state, description: action.payload }
        default: return state
    }
}