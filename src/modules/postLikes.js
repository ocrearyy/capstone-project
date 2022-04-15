import axios from 'axios';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/likes';
const postLikes = (pkmId) => {
  axios
    .post(url, {
      item_id: pkmId,
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postLikes;
