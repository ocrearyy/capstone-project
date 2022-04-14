

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
                  <p>Fuel: titanium</p>
                  <p>Weight: 400</p>
                </div>
                <div class="comment-details-2">
                    <p>Length: 100,000</p>
                    <p>Power: 100,000,000</p>
                  </div>
                </div>
                <div class="comment-topic">
                    <h2>Comments </h2>
                    <p class="comment-list"> </p>
                </div>
                <div>
                    <h2 id="comment-add" class="comment-topic">Add a comment</h2>
                    <ul class="form-Ul">
                        <li class="form-Li">
                            <label for="name"></label>
                            <input type="text" id="name" name="user_name" placeholder="Your name" required="" maxlength="30">
                        </li>
                        <li class="form-Li">
                            <label for="msg"></label>
                            <textarea id="msg" name="user_message" placeholder="Your insights" maxlength="500" rows="20" cols="30" required=""></textarea>
                        </li>
                        <li class="button">
                            <button id="comment-button" onclick="saveData()" type="submit">Comment</button>
                        </li>
                    </ul>

                </div>
            </div>`

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

};

export default displayComment;