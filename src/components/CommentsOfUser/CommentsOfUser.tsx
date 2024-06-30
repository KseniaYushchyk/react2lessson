import React, {FC} from 'react';
import {IComments} from "../../models/IComments";

interface IProps{
    comments:IComments[]
}

const CommentsOfUser:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map((comment:IComments) =><div>{comment.name}: {comment.body}</div>)}
        </div>
    );
};

export default CommentsOfUser;