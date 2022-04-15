import addComment from "./addComment";

const displayComment = () => {
  // Get the modal
  const modal = document.querySelector('#myModal');

modal.style.display = 'block';
modal.innerHTML = `
<!-- Modal content -->
            <div class="modal-content">
            <span class="close">&times;</span>
                <img class="pokeImage" src="" alt="">
                <h2 class="comment-topic">Space 3</h2>
                <div class="detail-container">
                <div class="comment-details-1">
                  <p>Weight: titanium</p>
                  <p>Type: 400</p>
                </div>
                <div class="comment-details-2">
                    <p>Id: 100,000</p>
                    <p>Ability: 100,000,000</p>
                  </div>
                </div>
                <div class="comment-topic">
                    <h2>Comments (2)</h2>
                    <ul id="output1" class="output"></ul>
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
                    </ul>`
  modal.style.display = 'block';

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];
  span.onclick = function () {
    modal.style.display = 'none';
  };

addComment();

};

export default displayComment;
