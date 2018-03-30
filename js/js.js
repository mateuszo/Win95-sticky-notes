"use strict"

// function updatePreview(){
//     //event.currentTarget
//     console.log("Changed")
//     let editor = document.getElementById("editor");
//     let preview = document.getElementById("preview");
//     preview.innerText = editor.innerText;
// }
// document.getElementById("editor").addEventListener("input", updatePreview);


function onDrop(event){
    let dX = event.clientX - event.srcElement.getAttribute('startX');
    let dY = event.clientY - event.srcElement.getAttribute('startY');
    let note = event.srcElement.parentElement;
    note.style.left = note.offsetLeft + dX + 'px';
    note.style.top = note.offsetTop + dY + 'px';
}

function onDrag(event) {
    event.srcElement.setAttribute('startX', event.clientX);
    event.srcElement.setAttribute('startY', event.clientY);
}

function destroyNote(event){
    event.srcElement.closest('.note').remove();
}

function createNote(event) {
    let noteTemplate = document.getElementById("note-template");
    let container = document.getElementsByClassName("container")[0];
    let note = noteTemplate.cloneNode(true);
    note.style.visibility = "visible";
    container.appendChild(note);
    registerNoteEvents(note);
}


function registerNoteEvents(note) {
    let noteHeading = note.firstElementChild;
    noteHeading.addEventListener("dragstart", onDrag);
    noteHeading.addEventListener("dragend", onDrop);
    note.querySelector('.close-button > button').addEventListener("click", destroyNote);
}



let notes = document.getElementsByClassName("note");

for(let note of notes){
    registerNoteEvents(note)
}


document.getElementById('notepad').addEventListener("dblclick", createNote);

