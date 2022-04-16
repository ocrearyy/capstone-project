import axios from 'axios';
import postLikes from './postLikes';
import displayComment from './displayComment';
import countItems from './countItems';

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const ulCards = document.querySelector('.home-list');
const results = [];
const resLikes = [];

const loadCards = (res, resLikes) => {
  const liCard = document.createElement('li');
  liCard.innerHTML = `
            <img src="${res.data.sprites.other.dream_world.front_default}" alt="pokemon image" class="pkm-img">
            <div class="card-title">
                <h3>${res.data.forms[0].name}</h3>
                <div class="card-likes">
                    <button class="like-btn"><i class="fa-regular fa-heart fa-2x"></i></button>
                    <p class="likes-p">${resLikes.likes} likes</p>
                </div>
            </div>
            <button class="comment-btn">Comments</button>
            `;
  ulCards.appendChild(liCard);
};

const renderData = (res1, pkm) => {
  for (let i = 0; i < countItems(); i += 1) {
    if (res1.data[i].item_id === results[i].data.forms[0].name) {
      loadCards(results[i], res1.data[i]);
    }
  }
  const pkmCounter = document.getElementById('pkm-counter');
  pkmCounter.innerHTML = `<li id="pkm-counter"><a href="#">Pokemon (${countItems()})</a></li>`;
  const likes = document.querySelectorAll('.like-btn');
  const likesP = document.querySelectorAll('.likes-p');
  const modalComment = document.querySelectorAll('.comment-btn');
  for (let i = 0; i < likes.length; i += 1) {
    likes[i].addEventListener('click', () => {
      postLikes(results[i].data.forms[0].name);
      resLikes[0].data[i].likes += 1;
      likesP[i].innerHTML = `${resLikes[0].data[i].likes} likes`;
    });
    modalComment[i].addEventListener('click', () => {
      displayComment(i + 1);
    });
  }
};

const getData = async (i, pkm) => {
  try {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
    results.push(res);
    if (i === 8) {
      const res1 = await axios(`${url}/apps/NPu1KWpwmlTnYdtWyYwl/likes/`);
      resLikes.push(res1);
      renderData(res1, pkm);
    } else {
      i += 1;
      getData(i);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData;
