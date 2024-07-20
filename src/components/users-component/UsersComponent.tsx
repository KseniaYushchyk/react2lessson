import React, {Component} from 'react';
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.get-all-users";
import UserComponent from "../user-component/UserComponent";

type stateType={
    users: IUser[]
}

class UsersComponent extends Component <{}, stateType> {

    state:stateType = {
        users:[]
    }
    componentDidMount() {
        userService.getAll().then(value => this.setState({users:value}))
    }

    render() {
        return (
            <div>
                {
                this.state.users.map(user => (<UserComponent key={user.id} user={user}/>))
                }
            </div>
        );
    }
}

export default UsersComponent;