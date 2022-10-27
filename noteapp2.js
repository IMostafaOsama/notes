let newNote = document.querySelector(".notes2");
let headlineInput = document.querySelector(".headlineInput");
let descriptionInput = document.querySelector(".descriptionInput");
let removeNote = document.querySelector(".removeNote");
let headlineText = document.querySelector(".headlineTitle");

function addNote() {
  let headlineInputValue = headlineInput.value;
  let descriptionInputValue = descriptionInput.value;

  let currentdate = new Date().toString().split(" ");
  let noteDate = currentdate[4].slice(0, 5);
  let day = currentdate[2];
  let month = currentdate[1];
  let year = currentdate[3];
  let noteCurrentDate = noteDate + " - " + day + " " + month + " " + year;

  document.querySelector(".headlineInput").placeholder =
    ".يجب ان تضف عنوان اولاً";
  document.querySelector(".headlineInput").style.backgroundColor = "#470000";

  if (headlineInputValue.length > 0) {
    if (descriptionInputValue.length == 0) {
      descriptionInputValue = ".هذه الملاحظة بلا وصف";
      newNote.innerHTML +=
        '<div><div class="newww "><input class="headlineTitle" type="text" value="' +
        headlineInputValue +
        '"><input class="descriptionTitle" type="text" value="' +
        descriptionInputValue +
        '"><div class="endbar"><p class="time">' +
        noteCurrentDate +
        "</p></div></div></div>";
      headlineInput.value = "";
      document.querySelector(".headlineInput").placeholder = "العنوان";
      document.querySelector(".headlineInput").style.backgroundColor =
        "#1c1c1c";
      removeNote.style.display = "flex";
    } else {
      newNote.innerHTML +=
        '<div><div class="newww "><input class="headlineTitle" type="text" value="' +
        headlineInputValue +
        '"><input class="descriptionTitle" type="text" value="' +
        descriptionInputValue +
        '"><div class="endbar"><p class="time">' +
        noteCurrentDate +
        "</p></div></div></div>";
      headlineInput.value = "";
      descriptionInput.value = "";
      document.querySelector(".headlineInput").placeholder = "العنوان";
      document.querySelector(".headlineInput").style.backgroundColor =
        "#1c1c1c";
      removeNote.style.display = "flex";
    }
  }
}

function deletebtn() {
  document.querySelector(".removetitle").style.display = "flex";
}
function okdelete() {
  newNote.innerHTML = "";
  removeNote.style.display = "none";
  document.querySelector(".removetitle").style.display = "none";
}
function canceldelete() {
  document.querySelector(".removetitle").style.display = "none";
  removeNote.style.display = "flex";
}

/*
let newNote = document.querySelector('.notes2');
let headlineInput = document.querySelector('.headlineInput');
let descriptionInput = document.querySelector('.descriptionInput');

let headlineText = document.querySelector('.headlineTitle');


let num = 0;



let notes = [];
let descnotes = []

function addNote(){
    let headlineInputValue = headlineInput.value;
    let descriptionInputValue = descriptionInput.value;
    let currentdate = new Date().toString().split(" ");
    let noteDate = currentdate[4].slice(0, 5);
    let day = currentdate[2];
    let month = currentdate[1];
    let year = currentdate[3];
    let noteCurrentDate = noteDate + ' - ' + day + ' ' + month + ' '+ year;
    document.querySelector('.headlineInput').placeholder = '.يجب ان تضف عنوان اولاً';
    document.querySelector('.headlineInput').style.backgroundColor = '#470000';




    if (headlineInputValue.length > 0) {
            notes.push(headlineInputValue)
            console.log(notes);
            headlineInput.value = '';
            descriptionInput.value = '';
            document.querySelector('.headlineInput').placeholder = 'العنوان';
            document.querySelector('.headlineInput').style.backgroundColor = '#1c1c1c';
            for (let i = 0; i < notes.length; i++) {
                newNote.innerHTML += '<div><div class="newww" id="'+notes.length+'"><div class="headlineTitle">'+notes[i]+'</div><div class="endbar"><p class="time">'+noteCurrentDate+'</p><button class="delete" onclick="deletebtn()">حزف</button></div></div></div>';
            }
        }
    }
    function deletebtn() {
        console.log('This is a technical issue we working on it.');
        console.log(notes.length);
    }


















    /* if (headlineInputValue.length > 0) {
            if (descriptionInputValue.length == 0) {
                descriptionInputValue = '.هذه الملاحظة بلا وصف';
                newNote.innerHTML += '<div><div class="newww " id="'+num+'"><div class="headlineTitle">'+headlineInputValue+'</div><div class="descriptionTitle">'+descriptionInputValue+'</div><div class="endbar"><p class="time">'+noteCurrentDate+'</p><button class="delete" onclick="deletebtn()">حزف</button></div></div></div>';
                headlineInput.value = '';
                document.querySelector('.headlineInput').placeholder = 'العنوان';
                document.querySelector('.headlineInput').style.backgroundColor = '#1c1c1c';
                num += 1;
            }else{
                newNote.innerHTML += '<div><div class="newww " id="'+num+'"><div class="headlineTitle">'+headlineInputValue+'</div><div class="descriptionTitle">'+descriptionInputValue+'</div><div class="endbar"><p class="time">'+noteCurrentDate+'</p><button class="delete" onclick="deletebtn()">حزف</button></div></div></div>';
                headlineInput.value = '';
                descriptionInput.value = '';
                document.querySelector('.headlineInput').placeholder = 'العنوان';
                document.querySelector('.headlineInput').style.backgroundColor = '#1c1c1c';
                num += 1;
            }
        }
        */
