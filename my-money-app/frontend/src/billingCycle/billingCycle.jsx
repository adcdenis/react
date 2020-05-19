import React from "react"
import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/tabsContent"
import TabsHeader from "../common/tab/tabsHeader"
import TabHeader from "../common/tab/tabHeader"

class BillingCycles extends React.Component {
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
             <TabsContent> </TabsContent> 
          </Tabs>
        </Content>
         
      </div>
    )
  }
}

export default BillingCycles
