function deleteCommentFun(id, data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      // alert("fount it");
      data.splice(i, 1);
      console.log(data);
      return data;
    } else if (data[i].replies !== []) {
      console.log(2);
      let res = deleteCommentFun(id, data[i].replies);
      if (res) {
        console.log(3);
        data[i].replies = res;
        return data;
      }
    }
  }
  // return null;
}

function addCommentFunc(id, data, commentObj) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i].replies = [...data[i].replies, commentObj];
      return data;
    } else if (data[i].replies !== []) {
      let res = addCommentFunc(id, data[i].replies, commentObj);
      if (res) {
        data[i].replies = res;
        return data;
      }
    }
  }
}

function editCommentFunc(id, data, comment) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i].comment = comment;
      return data;
    } else if (data[i].replies !== []) {
      let res = editCommentFunc(id, data[i].replies, comment);
      if (res) {
        data[i].replies = res;
        return data;
      }
    }
  }
}

export { deleteCommentFun, addCommentFunc, editCommentFunc };
