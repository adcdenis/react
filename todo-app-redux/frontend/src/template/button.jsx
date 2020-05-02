import React from 'react'
import If from './If'

export default props => (    
    
    <If rendered={props.rendered} > 
        <button className={`btn btn-${props.styled}`} onClick={props.handleAction}>            
           <i className={`fa fa-${props.icon}`} />
        </button>
    </If>     
)