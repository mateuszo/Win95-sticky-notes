export class NoteController{
    constructor(note){
        this.note = note;
    }

    handleContentChange(e){
        console.log(this);
        this.note.content = e.srcElement.value;
        console.log(this.note);
    }

    handleTitleChange(e){
        this.note.title = e.srcElement.innerText;
        console.log(this.note);
    }

    handleDragStart(e){
        this.note.position.setPosition(e.clientX, e.clientY);
        console.log(this.note);
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
    }

    handleDestroy(e){
        e.srcElement.closest('.note').remove();
    }



}