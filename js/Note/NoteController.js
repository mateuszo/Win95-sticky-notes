import {storage} from "../Storage/Storage.js";
import {mouseTracker} from "../Helpers/MouseTracker.js";

export class NoteController{
    constructor(note){
        this.note = note;
        storage.add(this.note);
    }

    handleContentChange(e){
        this.note.content = e.target.value;
        storage.save();
    }

    handleTitleChange(e){
        this.note.title = e.target.innerText;
        storage.save();
    }

    handleDragStart(e){
        e.dataTransfer.setData('text/plain', '');
        this.note.position.setPosition(e.clientX, e.clientY);
    }

    handleDragEnd(e){
        let dX = mouseTracker.X - this.note.position.X;
        let dY = mouseTracker.Y - this.note.position.Y;

        //TODO: make note re-render instead of messing with element properties
        let noteElement = e.target.parentElement;
        let X = noteElement.offsetLeft + dX;
        let Y = noteElement.offsetTop + dY;
        this.moveToPosition(noteElement, X, Y);
        this.moveToTop(noteElement);

        this.note.position.setPosition(X, Y);
        storage.save();
    }

    handleDestroy(e){
        e.target.closest('.note').remove();
        //TODO: delete view as well?
        storage.remove(this.note);
        delete this.model;
        delete this;
    }

    static moveToPosition(noteElement, X, Y){
        noteElement.style.left = X + 'px';
        noteElement.style.top = Y + 'px';
    }

    static moveToTop(noteElement){
        let notes = document.getElementsByClassName("note");
        let zIndex = 0;
        for(let note of notes){
            if(note.style.zIndex > zIndex){
                zIndex = note.style.zIndex;
            }
        }

        noteElement.style.zIndex = ++zIndex;

    }



}