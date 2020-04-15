import React from 'react'

export function filhosComProps(props) {
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, { ...props })
    })
}