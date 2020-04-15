import React from 'react'

// export
const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

// export 
const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

// export default function() {
//     return <p>teste</p>
// }
        
export { CompA, CompB }
export default CompA