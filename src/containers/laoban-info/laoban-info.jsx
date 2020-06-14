import  React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button, InputItem, WhiteSpace, WingBlank, List, NavBar, TextareaItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from "../../components/header-selector/header-selector";
import {update} from "../../redux/actions";

class Laoban extends Component{
     state={
         header:'',
         company:'',
         info:'',
         salary:'',
         post:'',
     }
     handleChange=(name,val)=>{
         this.setState({[name]:val})
     }
    save=()=>{
        // console.log(this.state)
        this.props.update(this.state)
    }
     setHeader=(header)=>{
         this.setState({header})
     }
    render() {
        const {user}=this.props
        if(user.header){
            return <Redirect to={'/laban'}></Redirect>
        }
        return(
            <div>
                <NavBar>老板信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <List>
                    <InputItem placeholder="1" onChange={(val)=>this.handleChange('post',val)}>招聘职位：</InputItem>
                    <InputItem placeholder="1" onChange={(val)=>this.handleChange('company',val)}>公司名称：</InputItem>
                    <InputItem placeholder="1" onChange={(val)=>this.handleChange('salary',val)}>职位薪资：</InputItem>
                    <TextareaItem title="职位要求："  rows={3} onChange={(val)=>this.handleChange('info',val)}></TextareaItem>
                </List>
                <Button type='primary' onClick={this.save()}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.newstate}),
    {update}
)(Laoban)