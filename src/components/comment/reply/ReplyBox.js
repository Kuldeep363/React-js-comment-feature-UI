import { useState } from "react";

const ReplyBox = ({ id, addReply }) => {
  let [comment, setComment] = useState("");

  const handleChange = (value) => {
    setComment(value);
  };
  const handleSubmit = () => {
    if (comment === "") {
      alert("Please enter comment");
    } else {
      addReply(comment)
      setComment("");
    }
  };
  return (
    <div>
      <input
        type="text"
        autoFocus
        value={comment}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleSubmit()} className='action-btn'>Reply</button>
    </div>
  );
};

export default ReplyBox;
