import React from 'react';
import Grid from '../common/layolt/grid'
import Row from '../common/template/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
        <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`${credit}`} text='Créditos'/>
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`${debt}`} text='Débitos'/>
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Saldo'/>
        </Row>
    </Grid>

)
