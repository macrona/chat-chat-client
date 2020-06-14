import  React,{Component} from 'react'
// import {List} from 'antd-mobile'
import {connect} from 'react-redux'

import {getUserList} from "../../redux/actions";
import UserList from '../user-list/user-list'

class Dashen extends Component{
    componentDidMount() {
        this.props.getUserList('laban')
    }

    render() {
       
        return(
           <UserList userList={this.props.userList}>

           </UserList>
        )
    }
}
export default connect(
    state=>({userList:state.userList}),{getUserList}
)(Dashen)