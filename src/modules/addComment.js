import displayComment from "./displayComment";




const addComment = async () => {

  
    // Select variables 
  const name = document.getElementById('name');
  const msg = document.getElementById('msg');
  const addBtn = document.getElementById('addBtn');
  const output = document.getElementById('output1');
  const todayDate = new Date().toISOString().slice(0, 10);

   
  
// What should be displayed 
  const listComment = () => {
    output.textContent = `${todayDate} ${name.value}: ${msg.value}`;
  }


//   When this button is clicked 
  addBtn.addEventListener('click', () => {
      listComment();
    });
};


export default addComment;