import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UserComponent from "./UserComponent/UserComponent";
import {getAllUsers, getCommentsOfUserById} from "../../services/api.get-all-users"
import {IComments} from "../../models/IComments";
import CommentsOfUser from "../CommentsOfUser/CommentsOfUser";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers().then((value:IUser[]) => {
            setUsers(value)
        });
    }, [])

    const getComments = (id:number) =>{
        getCommentsOfUserById(id,10).then((comments:IComments[])=>{setComments([...comments])})
    }

    const [comments, setComments] = useState<IComments[]>([])

    return (
        <div>
        <div>
            {users.map(user => (<UserComponent key={user.id} user={user} getComments={getComments}/>))}
        </div>
            <hr></hr>
         <div>
             <CommentsOfUser comments={comments}/>
         </div>   
        </div>
            
    );
};

export default UsersComponent;