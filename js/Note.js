import { Position } from "./Position.js";

export class Note {
    constructor(){
        this._id = null;
        this._title = "";
        this._content = "";
        this._position = new Position();
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