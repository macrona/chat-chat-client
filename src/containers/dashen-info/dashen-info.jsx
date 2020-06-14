import  React,{Component} from 'react'
import {connect} from 'react-redux'
import { Button,InputItem,WhiteSpace,WingBlank,List,NavBar,TextareaItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from "../../components/header-selector/header-selector";
import {update} from "../../redux/actions";

class Dashen extends Component{
     state={
        header:'',
        info:'',
        post:'',
     }
     handleChange=(name,val)=>{
         this.setState({[name]:val})
     }
     save=()=>{
        console.log(this.state)
        this.props.update(this.state)
    }
     setHeader=(header)=>{
         this.setState({header})
     }
    render() {
         const {user,update}=this.props
        if(user.header){
            return <Redirect to={'/dashen'}></Redirect>
        }
        return(
            <div>
                <NavBar>大神信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <List>
                    <InputItem placeholder="1" onChange={(val)=>this.handleChange('post',val)}>求职岗位：</InputItem>
                    <TextareaItem title="个人介绍：" rows={3} onChange={val=>this.handleChange('info',val)}></TextareaItem>
                </List>
                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.newstate}),
    {update}
)(Dashen)