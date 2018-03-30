"use strict";

import { Note } from "./Note/Note.js";
import { NoteController } from "./Note/NoteController.js";
import { NoteView } from "./Note/NoteView.js";
import {NewButtonController} from "./NewNoteButton/NewButtonController.js";
import {NewButtonView} from "./NewNoteButton/NewButtonView.js";

// var note = new Note();
// note.title = "hello";
// note.content = "world";
//
// var noteController = new NoteController(note);
// var noteView = new NoteView(noteController);


let buttonController = new NewButtonController();
let buttonView = new NewButtonView(buttonController);


let container = document.getElementsByClassName("container")[0];
container.appendChild(buttonView.element);
