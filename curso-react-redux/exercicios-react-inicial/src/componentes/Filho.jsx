import React from 'react'

export default props => 
    <div>
        <button 
            onClick={() => props.notificarSaida('Praia')}>
            Vou Sair
        </button>
    </div>