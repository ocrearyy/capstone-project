import axios from 'axios';

const ulCards = document.querySelector('.home-list');

const getData = async () => {
  try {
    for (let i = 0; i < 9; i += 1) {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
      const res1 = await axios(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/likes/`
      );
      console.log(res1.data[i].item_id);
      if (res1.data[i].item_id === res.data.forms[0].name)
        loadCards(res, res1.data[i]);
    }
  } catch (error) {
    console.log(error);
  }
};

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
};

export default getData;
