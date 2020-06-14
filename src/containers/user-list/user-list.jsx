import  React,{Component} from 'react'
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'

import {getUserList} from "../../redux/actions";

const {Header,Body}=Card
class UserList extends Component{
   
    render() {
  
        return(
            <WingBlank className={'am-userlist'}>
                {
                    this.props.userList.map(user=>(
                        <div key={user._id}>
                            <WhiteSpace/>
                            <Card>
                                <Header
                                // title={user.username}
                                thumb={user.header?require(`../../assets/images/${user.header}.png`):null}
                                extra={user.username}
                                />
                                <Body>
                                    <div>职位：{user.post}</div>
                                    {user.company?<div>公司：{user.company}</div>:null}
                                    {user.salary?<div>公司：{user.salary}</div>:null}
                                    <div>描述：{user.info}</div>
                                </Body>

                                
                            </Card>
                        </div>
                    ))
                }
            </WingBlank>

        )
    }
}
export default UserList