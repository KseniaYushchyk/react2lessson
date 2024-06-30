import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";

interface IProps{
    user:IUser,
    getComments:(id:number)=> void
}

const UserComponent:FC<IProps> = ({user,getComments}) => {
    return (
        <div>
            {user.id}: {user.name} <button onClick={()=>{
                getComments(user.id)
        }}>
            Show comments</button>
        </div>
    );
};

export default UserComponent;