const loadCards = () => {
  const ulCards = document.querySelector('.home-list');
  for (let i = 0; i < 6; i += 1) {
    const liCard = document.createElement('li');
    liCard.innerHTML = `
    <div class="card-title">
        <h3>Name</h3>
        <div class="card-likes">
            <i class="fa-regular fa-heart"></i>
            <p>5 likes</p>
        </div>
    </div>
    <button class="comment-btn">Comments</button>
    `;
    ulCards.appendChild(liCard);
  }
};

export default loadCards;
