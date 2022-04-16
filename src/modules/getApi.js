import axios from 'axios';

const getApi = async (id) => {
  try {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return res;
  } catch (error) {
    console.log(error);
  }
  return true;
};

export default getApi;
