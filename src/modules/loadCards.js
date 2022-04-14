import axios from 'axios';
import displayComment from './displayComment';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const ulCards = document.querySelector('.home-list');
const results = [];

const loadCards = (res, resLikes) => {
  const liCard = document.createElement('li');
  liCard.innerHTML = `
            <img src="${res.data.sprites.other.dream_world.front_default}" alt="pokemon image" class="pkm-img">
            <div class="card-title">
                <h3>${res.data.forms[0].name}</h3>
                <div class="card-likes">
                    <i class="fa-regular fa-heart"></i>
                    <p>${resLikes.likes} likes</p>
                </div>
            </div>
            <button class="comment-btn">Comments</button>
            `;
  ulCards.appendChild(liCard);
  document.querySelectorAll('.comment-btn').forEach((ele) => {
    ele.addEventListener('click', () => {
     displayComment();
    });
  });
};

const renderData = (res1) => {
  for (let i = 0; i < 9; i += 1) {
    if (res1.data[i].item_id === results[i].data.forms[0].name) {
      loadCards(results[i], res1.data[i]);
    }
  }
};

const getData = async (i) => {
  try {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
    results.push(res);
    if (i === 8) {
      const res1 = await axios(`${url}/apps/NPu1KWpwmlTnYdtWyYwl/likes/`);
      renderData(res1);
    } else {
      i += 1;
      getData(i);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData;


