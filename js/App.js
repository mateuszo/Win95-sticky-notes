"use strict";

import { Note } from "./Note.js";
import { NoteController } from "./NoteController.js";
import { NoteView } from "./NoteView.js";

var note = new Note();
note.title = "hello";
note.content = "world";


var noteController = new NoteController(note);

var noteView = new NoteView(noteController);

let container = document.getElementsByClassName("container")[0];

container.appendChild(noteView.element);