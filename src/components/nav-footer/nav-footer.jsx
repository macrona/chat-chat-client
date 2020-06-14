import  React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import { withRouter } from 'react-router-dom'

const Item =TabBar.Item
 class NavFooter extends Component{
    render() {
        const navList=this.props.navList.filter(i=>!i.hide)
        const {pathname}=this.props.location
        return(
            
                <TabBar>
                    {
                        navList.map((i,index)=>(
                            <Item 
                            key={index}
                            title={i.text} 
                            icon={{uri:require(`./nav-images/${i.icon}.png`)}}
                            selectedIcon={{uri:require(`./nav-images/${i.icon}-selected.png`)}}
                            selected={pathname===i.path}
                            onPress={()=>{
                                this.props.history.replace(i.path)
                            }}
                            />

                        ))
                    }
                </TabBar>
           
        )
    }
}
export default withRouter(NavFooter)