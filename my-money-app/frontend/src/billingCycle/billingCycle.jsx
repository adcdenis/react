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
import { selectTab, showTabs } from "../common/tab/tabActions"
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { create } from './billingCycleAction'

class BillingCycles extends React.Component {

  componentDidMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
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
                 <BillingCycleList/>
              </TabContent>
              <TabContent id="tabCreate">
                 <BillingCycleForm onSubmit={this.props.create}/>
              </TabContent>
              <TabContent id="tabUpdate">
               <BillingCycleForm onSubmit={this.props.create}/>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>     
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab, showTabs, create }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
