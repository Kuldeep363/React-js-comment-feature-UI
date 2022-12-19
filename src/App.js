import { createContext, useState } from "react";
import { comments } from "../src/Data/commentData";
import Reply from "./components/comment/reply/reply";
import { addCommentFunc, deleteCommentFun, editCommentFunc } from "./functions";
import "./styles.css";

const UserContext = createContext(null);

const CommentBox = () => {
  let [allComments, setAllComments] = useState(comments);
  let [comment, setComment] = useState("");
  const handleCommentChange = (value) => {
    setComment(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      alert("Please enter comment");
    } else {
      setAllComments((c) => [
        ...c,
        {
          id: Math.ceil(Math.random() * 100),
          comment,
          author: 1,
          replies: []
        }
      ]);
      setComment('')
    }
  };

  function deleteComment(id) {
    let result = deleteCommentFun(id, allComments);
    setAllComments([...result]);
  }
  function addReply(id, commentObj) {
    let result = addCommentFunc(id, allComments, commentObj);
    // console.log(result);
    setAllComments([...result]);
  }
  function editReply(id, comment) {
    let result = editCommentFunc(id, allComments, comment);
    console.log(result);
    setAllComments([...result]);
  }
  return (
    <div id='container'>
      <UserContext.Provider value={1}>
        <div id="comment-feature">
          <h2>Comment Feature <small>(User ID: 1)</small> </h2>
          <div id="comment-box">
            <input
              type="text"
              value={comment}
              onChange={(e) => handleCommentChange(e.target.value)}
              id='comment-input'
            />
            <button onClick={(e) => handleSubmit(e)} className='submit-btn' >Comment</button>
          </div>
          {allComments.map((comm) => {
            return (
              <div key={comm.id}>
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
      </UserContext.Provider>
    </div>
  );
};

export default CommentBox;

export { UserContext };
