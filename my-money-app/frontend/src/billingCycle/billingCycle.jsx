import React from "react"
import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/tabsContent"
import TabsHeader from "../common/tab/tabsHeader"
import TabHeader from "../common/tab/tabHeader"
import TabContent from "../common/tab/tabContent"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { create, update, excluir, init } from './billingCycleAction'

class BillingCycles extends React.Component {

  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader title="BillingCycles" small="Versão 1.0" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCycleList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm buttonLabel="Salvar" icon='primary' onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm buttonLabel="Editar" icon='warning' onSubmit={this.props.update} />
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCycleForm buttonLabel="Excluir" icon='danger' readOnly={true} onSubmit={this.props.excluir} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ create, update, excluir, init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
