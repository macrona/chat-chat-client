import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,WingBlank,List,InputItem,WhiteSpace,NavBar ,Radio} from 'antd-mobile';
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo';
import {register } from '../../redux/actions';

 class Register extends Component {
state={
    username:'',
    type:'dashen',
    password:'',
    password2:'',
}
handleChange=(name,value)=>{
    this.setState({
        [name]:value//此处并不是set name这个state ，而是读取这个变量值。
    })
}
register=()=>this.props.register(this.state)

  toLogin=()=>{this.props.history.replace('/login')}
  render() {
    const {type}=this.state
    const {msg,redirectTo}=this.props.user
      if(redirectTo){
          return <Redirect to={redirectTo}/>
      }
    return (
      <div>
            <NavBar>MACRONA</NavBar>
            <Logo/>
          {msg?<div className="error-msg">{msg}</div>:null}
            <WingBlank>
                <List>
                    <InputItem placeholder='输入用户名' onChange={v=>this.handleChange('username',v)}>
                    用户名：
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' placeholder='输入密码' onChange={v=>this.handleChange('password',v)}>
                    密&nbsp;&nbsp;&nbsp;码
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' placeholder='确认密码' onChange={v=>this.handleChange('password2',v)}>
                    确认密码：
                    </InputItem>
                    <WhiteSpace/>
                    <List.Item>
                        <span>用户类型</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={type==='dashen'} onClick={()=>{this.handleChange('type','dashen')}}>Employer</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={type==='laban'} onClick={()=>{this.handleChange('type','laban')}}>Boss</Radio>
                    </List.Item>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toLogin}>已经有账号</Button>

                </List>
            </WingBlank>
      </div>
    );
  }
}
export default connect(
  state=>({user:state.newstate}),
  {register}
)(Register)