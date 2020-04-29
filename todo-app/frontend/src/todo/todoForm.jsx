import React from 'react'
import Grid from '../template/grid'
import Button from '../template/button'

export default props => (
    <div role='form' className='todoForm'>
       
        <Grid xs='12' sm='3' md='10'>
            <input className='form-control' placeholder='digite aqui uma tarefa' onChange={props.handleChange} value={props.description}/>
        </Grid>    
        <Grid xs='12' sm='3' md='2'>
            <Button icon='plus' rendered={true} styled='primary' handleAction={props.handleAdd} />
        </Grid>
    </div>
)