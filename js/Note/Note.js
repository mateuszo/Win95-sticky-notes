import { Position } from "./Position.js";

export class Note {
    constructor(){
        this._id = null;
        this._title = "Edit me!";
        this._content = "Edit me!";
        this._position = new Position();
    }

    static createFromObject(obj){
        let note = new Note();
        let position = new Position();
        Object.assign(note, obj);
        Object.assign(position, obj._position)
        note.position = position;
        return note;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

}