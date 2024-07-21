import React, {Component} from 'react';
import {IUser} from "../../models/IUser";

type PropType = {user: IUser}

class UserComponent extends Component<PropType> {
    render() {
        return (
            <div>
                {this.props.user.id}. {this.props.user.name} {this.props.user.username}: {this.props.user.email}
            </div>
        );
    }
 }

export default UserComponent;