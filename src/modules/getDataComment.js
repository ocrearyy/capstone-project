import axios from 'axios';

const getDataComment = async (id) => {
  try {
    const res = await axios(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/comments?item_id=${id}`,
    );
    return res;
  } catch (error) {
    console.log(error);
  }
  return true;
};

export default getDataComment;
