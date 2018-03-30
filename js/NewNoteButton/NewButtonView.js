export class NewButtonView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();

    }

    render() {
        return `<div>
                    <img src="img/64px-Icon-notepad.svg.png"> <- double click here to create a new note
                </div>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        this.element.getElementsByTagName('img')[0].addEventListener("dblclick", this.controller.handleDblClick.bind(this.controller));
    }
}