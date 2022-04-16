import axios from 'axios';

const postComment = (item_id, username, comment) => {
  axios
    .post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/comments',
      { item_id, username, comment }
    )
    .catch((error) => {
      console.log(error);
    });
};

export default postComment;
