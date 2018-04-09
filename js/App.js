"use strict";

import {NewButtonController} from "./NewNoteButton/NewButtonController.js";
import {NewButtonView} from "./NewNoteButton/NewButtonView.js";
import {storage} from "./Storage/Storage.js";
import {NoteView} from "./Note/NoteView.js";
import {NoteController} from "./Note/NoteController.js";


let buttonController = new NewButtonController();
let buttonView = new NewButtonView(buttonController);

let container = document.getElementsByClassName("container")[0];
container.appendChild(buttonView.element);


// load notes and display them
for(let note of storage.notes){
    let noteController = new NoteController(note);
    let noteView = new NoteView(noteController);
    container.appendChild(noteView.element);
}