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


// load notes and show them
for(let note of storage.notes){
    let noteController = new NoteController(note);
    let noteView = new NoteView(noteController);
    // let container = document.getElementsByClassName("container")[0];
    container.appendChild(noteView.element);
}