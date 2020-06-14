import  React,{Component} from 'react'
import {List,Grid} from 'antd-mobile'



export default class HeaderSelector extends Component{
    constructor(props){
        super(props)
        this.headerList=[]
        for(var i=0;i<20;i++){
            const text=`头像${i+1}`
            this.headerList.push({text,icon:require(`../../assets/images/${text}.png`)})
        }
    }
    state={
        icon:null
    }
    selectHeader=({icon,text})=>{
        this.setState({icon})
        this.props.setHeader(text)
    }

    render() {
        const data=this.headerList
        const {icon}=this.state
        const gridHeader=icon?<p>已选择头像：<img src={icon} alt="header"/></p>:'请选择头像'
        return(
            <List renderHeader={()=>gridHeader}>
                <Grid data={data} columnNum={5} hasLine={true} onClick={this.selectHeader}>

                </Grid>
            </List>
        )
    }
}