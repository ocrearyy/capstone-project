import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
import displayComment from './displayComment';
import addComment from './addComment';

=======
>>>>>>> 2423802726dce36120d9ef870245617028b05caa
=======
import postLikes from './postLikes';
>>>>>>> 1b9cf188694f9ccbe3e714edc3c491b5e16237db

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
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

const renderData = (res1) => {
  for (let i = 0; i < 9; i += 1) {
    if (res1.data[i].item_id === results[i].data.forms[0].name) {
      loadCards(results[i], res1.data[i]);
    }
  }
  const likes = document.querySelectorAll('.like-btn');
  const likesP = document.querySelectorAll('.likes-p');
  for (let i = 0; i < likes.length; i += 1) {
    likes[i].addEventListener('click', () => {
      postLikes(results[i].data.forms[0].name);
      resLikes[0].data[i].likes += 1;
      likesP[i].innerHTML = `${resLikes[0].data[i].likes} likes`;
    });
  }
};

const getData = async (i) => {
  try {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
    results.push(res);
    if (i === 8) {
      const res1 = await axios(`${url}/apps/NPu1KWpwmlTnYdtWyYwl/likes/`);
      resLikes.push(res1);
      console.log(resLikes[0].data[0]);
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
