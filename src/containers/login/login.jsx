import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,WingBlank,List,InputItem,WhiteSpace,NavBar } from 'antd-mobile';
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo';
import { login } from '../../redux/actions';


 class Login extends Component {
state={
    username:'',
    password:''
}
login=()=>this.props.login(this.state)
handleChange=(name,v)=>{
    this.setState({
            [name]:v
    })
}
  toRegister = () => { this.props.history.replace('/register') }
  render() {
      const {msg,redirectTo}=this.props.user
      // debugger
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
                    <Button type="primary" onClick={this.login}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toRegister}>还没有账号</Button>

            </List>
           </WingBlank>
      </div>
    );
  }
}
export default connect(
  state=>({user:state.newstate}),{login}
)(Login)