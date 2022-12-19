import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import EditBox from "./editBox";
import ReplyBox from "./ReplyBox";

const Reply = ({
  id,
  comment,
  author,
  replies,
  deleteComment,
  addReply,
  editReply
}) => {
  const userID = useContext(UserContext);
  let [showReplyBox, setShowReplyBox] = useState(false);
  let [showEditBox, setShowEditBox] = useState(false);
  const showReplyBoxFunc = () => {
    if (showEditBox) {
      setShowEditBox(!showEditBox);
    }
    setShowReplyBox(!showReplyBox);
  };
  const showEditBoxFunc = () => {
    if (showReplyBox) {
      setShowReplyBox(!showReplyBox);
    }
    setShowEditBox(!showEditBox);
  };

  const addCommentReply = (comment)=>{
    addReply(id, {
      id: Math.ceil(Math.random() * 100),
      comment,
      author: 1,
      replies: []
    });
    setShowReplyBox(false)
  }
  const editCommentReply = (comment)=>{
    editReply(id, comment);
    setShowEditBox(false)
  }

  return (
    <div>
      <div className="comment">
        <div>{comment}</div>
        <div>User ID: {author}</div>
        <small className="commentBtn" onClick={() => showReplyBoxFunc()}>
          Reply
        </small>
        {userID === author ? (
          <>
            <small className="commentBtn" onClick={() => deleteComment(id)}>
              Delete
            </small>
            <small className="commentBtn" onClick={() => showEditBoxFunc()}>
              Edit
            </small>
          </>
        ) : null}
        {showReplyBox && <ReplyBox id={id} addReply={addCommentReply} />}
        {showEditBox && (
          <EditBox id={id} value={comment} editReply={editCommentReply} />
        )}
      </div>
      {replies &&
        replies.map((comm) => {
          return (
            <div key={comm.id} className="replies">
              <Reply
                id={comm.id}
                comment={comm.comment}
                author={comm.author}
                replies={comm.replies}
                deleteComment={deleteComment}
                addReply={addReply}
                editReply={editReply}
              />
            </div>
          );
        })}
    </div>
  );
};
export default Reply;
