import Comment from './Comment';

export const CommentList = ({comments}) => {

    return (
      <div>
        {comments.map(comment => 
          <Comment comment = {comment} key = {comment.id} />
        )}
      </div>
    );
  }

export default CommentList;