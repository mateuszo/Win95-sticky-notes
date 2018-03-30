import {Note} from "../Note/Note.js";
import {NoteView} from "../Note/NoteView.js";
import {NoteController} from "../Note/NoteController.js";

export class NewButtonController {
    constructor() {
    }

    handleDblClick(e) {
        let note = new Note();
        let noteController = new NoteController(note);
        let noteView = new NoteView(noteController);
        let container = document.getElementsByClassName("container")[0];
        container.appendChild(noteView.element);
    }

}