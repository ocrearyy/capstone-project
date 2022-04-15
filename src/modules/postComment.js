import axios from "axios";
import addComment from './addComment'

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

let bodyContent = JSON.stringify({
    "item_id": "1",
    "username": `${addComment().name}`,
    "comment": `${addComment().msg}`
});

let reqOptions = {
  url: "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/comments",
  method: "POST",
  headers: headersList,
  body: bodyContent,
}

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
}) 