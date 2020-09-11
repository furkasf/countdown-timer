const button = document.querySelector('.btn');
let board = document.getElementById("notes-body");

button.addEventListener('click', creatNote)

function creatNote(e){
    let note = document.querySelector(".creat-note").value;// access to text
    let noteList = document.createElement('li');
    noteList.className = 'note';
    noteList.appendChild(document.createTextNode(note))//import text to in li item
    board.appendChild(noteList)// show note from fraont page
    note.value = '';
}