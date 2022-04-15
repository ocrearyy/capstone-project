import axios from 'axios';
import displayComment from './displayComment';
import addComment from './addComment';


const ulCards = document.querySelector('.home-list');

const getData = async () => {
  try {
    for (let i = 0; i < 9; i += 1) {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
      loadCards(res);
    }
  } catch (error) {
    console.log(error);
  }
};

const loadCards = (res) => {
  const liCard = document.createElement('li');
  liCard.innerHTML = `
          <img src="${res.data.sprites.other.dream_world.front_default}" alt="pokemon image" class="pkm-img">
          <div class="card-title">
              <h3>${res.data.forms[0].name}</h3>
              <div class="card-likes">
                  <i class="fa-regular fa-heart"></i>
                  <p>5 likes</p>
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


export default getData;


