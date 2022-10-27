let newNote = document.querySelector('.notes2');
let headlineInput = document.querySelector('.headlineInput');
let descriptionInput = document.querySelector('.descriptionInput');

let headlineText = document.querySelector('.headlineTitle');


/*
const newnoteAtt = document.createElement('div');
    newnoteAtt.class = 'newww';
        const Hline = newnoteAtt.createElement('div');
            Hline.class = 'headlineTitle';
            Hline.innerHTML = headlineInput.value;
        const Dline = newnoteAtt.createElement('div');
            Dline.class = 'descriptionTitle';
            Dline.innerHTML = descriptionInput.value;
        const bar = newnoteAtt.createElement('div');
            bar.class = 'endbar';
            const para = bar.createElement('p');
                para.innerHTML = noteCurrentDate;
            const botn = bar.createElement('button');
                botn.class = 'delete';
                botn.on








<div class="newww" id="'+headlineInputValue+'">
    <div class="headlineTitle">'+headlineInputValue+'</div>
    <div class="descriptionTitle">'+descriptionInputValue+'</div>
    <div class="endbar">
        <p class="time">'+noteCurrentDate+'</p>
        <button class="delete" id="delete00000" onclick="deletebtn()">حزف</button>
    </div>
</div>
*/


let num = 0;





/*
function Enter(event) {
    if (event.key == "enter") {
        alert("hello");
        console.log("hi")
=        document.querySelector('.addnotebtn').click();
=    }
}
*/

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
}

    function deletebtn() {
        console.log('This is a technical issue we working on it.');
        console.log(document.querySelector(button));
    }