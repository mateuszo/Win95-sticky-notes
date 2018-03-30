import {storage} from "../Storage/Storage.js";

export class NoteController{
    constructor(note){
        this.note = note;
        storage.add(this.note);
    }

    handleContentChange(e){
        this.note.content = e.srcElement.value;
        storage.save();
    }

    handleTitleChange(e){
        this.note.title = e.srcElement.innerText;
        storage.save();
    }

    handleDragStart(e){
        this.note.position.setPosition(e.clientX, e.clientY);
    }

    handleDragEnd(e){
        let dX = e.clientX - this.note.position.X;
        let dY = e.clientY - this.note.position.Y;
        let noteElement = e.srcElement.parentElement;
        let X = noteElement.offsetLeft + dX;
        let Y = noteElement.offsetTop + dY;
        noteElement.style.left = X + 'px';
        noteElement.style.top = Y + 'px';
        this.note.position.setPosition(X, Y);
        storage.save();
    }

    handleDestroy(e){
        e.srcElement.closest('.note').remove();
        //TODO: delete view as well?
        storage.remove(this.note);
        delete this.model;
        delete this;
    }



}