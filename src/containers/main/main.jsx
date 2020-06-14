import React, { Component } from 'react';
import {Route,Switch,Redirect}  from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'//操作前端cookie对象 set get delete
import { NavBar } from 'antd-mobile';

// import HeaderSelector from "../../components/header-selector/header-selector";
import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'
import Message from "../message/message";
import Personal from "../personal/personal";
import Laoban from "../laoban/laoban";
import Dashen from "../dashen/dashen";
import NotFound from '../../components/not-found/not-found';
import NavFooter from '../../components/nav-footer/nav-footer';

import {getUser} from "../../redux/actions"
import {getRedirectTo} from "../../utils";


 class Main extends Component {
    //渲染之前检查用户是否登录
  navList=[
    {
      path:'/laoban',
      component:Laoban,
      title:'大神列表',
      icon:'dashen',
      text:'大神',
    },
    {
      path:'/dashen',
      component:Dashen,
      title:'老板列表',
      icon:'laoban',
      text:'老板',
    },
    {
      path:'/message',
      component:Message,
      title:'信息列表',
      icon:'message',
      text:'消息',
    },
    {
      path:'/personal',
      component:Personal,
      title:'用户列表',
      icon:'personal',
      text:'个人',
    },
  ]
  componentDidMount(){
    const userid=Cookies.get('userid')
    const{ user}=this.props
    if(userid&&!user._id){
      this.props.getUser()
    }
  }
  render() { 
      // const {user}=this.props
      // if(!user._id){
      //     return <Redirect to={'/login'}/>
      // }

      const userid=Cookies.get('userid')
      const {user}=this.props
      const pathname=this.props.location.pathname
      // console.log(this.props)
      // console.log(state)
      // if(!userid){
      //   return <Redirect to={'/login'}/>
      // }
      if(!userid){
          return <Redirect to={'/login'}/>
      }else {
          if(!user._id){
        return null
          }else{

              if(pathname==='/'){
                 const path= getRedirectTo(user.type,user.header)
                  return <Redirect to={path}/>
              }
              if(user.type==='laoban'){
                this.navList[1].hide=true
              }else{
                this.navList[0].hide=true
              }
          }
      }

      const currentNav=this.navList.find(nav=>nav.path===pathname)


    return (
     <div> 
       {currentNav?<NavBar className={'stick-top'}>{currentNav.title}</NavBar>:null}
      <Switch>
        <Route path='/message' component={Message}/>
        <Route path='/personal' component={Personal}/>
        <Route path='/laoban' component={Laoban}/>
        <Route path='/dashen' component={Dashen}/>
        <Route path='/laobaninfo' component={LaobanInfo}/>
        <Route path='/dasheninfo' component={DashenInfo}/>
        <Route component={NotFound}/>
        

      </Switch>
      {currentNav?<NavFooter navList={this.navList}/>:null}
     </div> 
    );
  }
}

export default connect(
    state=>({user:state.newstate}),{getUser}
)(Main)