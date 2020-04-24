import React from 'react'

export default props => {

    if (props.rendered) {

        return (

            <button className={`btn btn-${props.styled}`}>            
                <i className={`fa fa-${props.icon}`} />
            </button>
        )
    } else
        return null
}