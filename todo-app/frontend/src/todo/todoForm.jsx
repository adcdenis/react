import React from 'react'
import Grid from '../template/grid'

export default props => (
    <div role='form' className='todoForm'>
       
        <Grid xs='12' sm='3' md='10'>
            <input className='form-control' placeholder='digite aqui uma tarefa'/>
        </Grid>    
        <Grid xs='12' sm='3' md='2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'/>
            </button>
        </Grid>
    </div>
)