import React from 'react'
import If from './If'

export default props => (    
    
    <If rendered={props.rendered} > 
        <button className={`btn btn-${props.styled}`}>            
           <i className={`fa fa-${props.icon}`} />
        </button>
    </If>     
)