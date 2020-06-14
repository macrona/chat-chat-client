import React, { Component } from 'react'
import { Button, Result, WhiteSpace, List, Modal } from 'antd-mobile';
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { resetUser } from '../../redux/actions'
const Item = List.Item
const Brief = Item.Brief
class Personal extends Component {
   
    handleLogout = () => {
        console.log('====================================');
        console.log('?');
        console.log('====================================');
       alert('???')
        Modal.alert('Delete', 'Are you sure???', [
            {
                text: 'Cancel', onPress: () => console.log('cancel')
            },
            {
                text: 'Ok', onPress: () => {
                    Cookies.remove('userid')
                    this.props.resetUser()
                }
            },
        ])
    }
    render() {
        const { username, header, post, info, salary, company } = this.props.user
        return (
            <div style={ { marginTop: 50 } }>
               {header?
                <Result
               img={ < img src={ require(`../../assets/images/${header}.png`) } style={ { width: 50 } } alt={ "header" } /> }
                title={ username }
                message={ company }
            />: <Result
            // {header?img={ < img src={ require(`../../assets/images/${header}.png`) } style={ { width: 50 } } alt={ "header" } /> }:null}
            title={ username }
            message={ company }
        />
               }
                <List renderHeader={ () => '相关信息' }>
                    <Item multipleLine>
                        <Brief>职位：{ post }</Brief>
                        <Brief>简介：{ info }</Brief>
                        { salary ? <Brief>薪资：{ salary }</Brief> : null }
                    </Item>
                </List>
                <WhiteSpace />
            
                    <List>
                        <Button  onClick={console.log(',,,,')} type='warning'>退出登录</Button>
                    </List>
                    {/* <Button  onClick={console.log(',,,,')} type='warning'>退出登录</Button> */}
            </div>
        )
    }
}
export default connect(
    state => ({ user: state.newstate }), resetUser
)(Personal)