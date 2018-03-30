export class Position {
    constructor(){
        this._X = 200;
        this._Y = 200;
    }

    setPosition(X, Y){
        this.X = X;
        this.Y = Y;
    }

    get X() {
        return this._X;
    }

    set X(value) {
        this._X = value;
    }

    get Y() {
        return this._Y;
    }

    set Y(value) {
        this._Y = value;
    }
}