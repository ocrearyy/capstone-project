import getApi from './getApi';
import postComment from './postComment';
import getDataComment from './getDataComment';
import counterComments from './counterComments';

const liHolder = document.createElement('li');
const ulCom = document.createElement('ul');
const comCoun = document.createElement('h2');

const loadListComments = (id) => {
  getDataComment(id).then((result) => {
    for (let i = 0; i < result.data.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `(${result.data[i].creation_date}) ${result.data[i].username}: ${result.data[i].comment}`;
      ulCom.appendChild(li);
    }
  });
};

const displayComment = (id) => {
  // Get the modal
  const modal = document.querySelector('#myModal');

  getApi(id).then((res) => {
    ulCom.innerHTML = '';
    comCoun.innerHTML = '';
    modal.style.display = 'block';
    modal.innerHTML = `
<!-- Modal content -->
            <div class="modal-content">
            <span class="close">&times;</span>
                <img class="pokeImage" src="${res.data.sprites.other.dream_world.front_default}" alt="">
                <h2 class="comment-topic">${res.data.forms[0].name}</h2>
                <div class="detail-container">
                <div class="comment-details-1">
                  <p>Weight: ${res.data.weight}</p>
                  <p>Type: ${res.data.types[0].type.name}</p>
                </div>
                <div class="comment-details-2">
                    <p>Pokedex Id: ${id}</p>
                    <p>Base ATK: ${res.data.stats[1].base_stat}</p>
                  </div>
                </div>
                <div class="comments">
                </div>
                <div>
                    <h2 id="comment-add" class="comment-topic">Add a comment</h2>
                    <ul class="form-Ul">
                        <li class="form-Li">
                            <label for="name"></label>
                            <input type="text" id="name" name="user_name" placeholder="Your name" required="" maxlength="90">
                        </li>
                        <li class="form-Li">
                            <label for="msg"></label>
                            <textarea id="msg" name="user_message" placeholder="Your insights" maxlength="500" rows="20" cols="30" required=""></textarea>
                        </li>
                        <li class="button">
                            <button id="addBtn" type="button">Comment</button>
                        </li>
                    </ul>`;

    modal.style.display = 'flex';

    const commentDiv = document.querySelector('.comments');
    loadListComments(id);
    commentDiv.append(comCoun, ulCom);

    const addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', () => {
      const username = document.getElementById('name').value;
      const comment = document.getElementById('msg').value;
      if (username.length !== 0 && comment.length !== 0) {
        postComment(id, username, comment);
        // placeholder of the comment for better performance
        liHolder.innerHTML = `${username}: ${comment}`;
        ulCom.append(liHolder);
        commentDiv.appendChild(ulCom);
      }
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
      modal.style.display = 'none';
    };
  });
};

const loadListComments = (id) => {
  getDataComment(id).then((result) => {
    for (let i = 0; i < result.data.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `(${result.data[i].creation_date}) ${result.data[i].username}: ${result.data[i].comment}`;
      ulCom.appendChild(li);
      comCoun.innerHTML = `Comments: ${result.data.length}`;
    }
    counterComments(result.data.length);
  });
};

export default displayComment;
