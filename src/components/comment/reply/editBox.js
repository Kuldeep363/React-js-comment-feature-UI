import { useState } from "react";

const EditBox = ({ id, value, editReply }) => {
  let [comment, setComment] = useState(value);
  const handleChange = (value) => {
    setComment(value);
  };
  const handleSubmit = () => {
    if (comment === "") {
      alert("Please enter comment");
    } else {
      editReply(comment);
      setComment("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={comment}
        autoFocus
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleSubmit()} className='action-btn' >Submit</button>
    </div>
  );
};

export default EditBox;
