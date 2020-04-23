import React from 'react'

export default props => (
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input className='form-control' placeholder='digite aqui uma tarefa'/>
        </div>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'/>
            </button>
        </div>

    </div>
)