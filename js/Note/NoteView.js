


export class NoteView {
    constructor(controller){
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();

    }

    render(){
        return `
        <div class="note panel panel-default">
            <div class="panel-heading" draggable="true">
                <h3 class="panel-title" contenteditable="true">${this.controller.note.title}</h3>
                <div class="pull-right close-button">
                    <button><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                </div>
            </div>
            <div><textarea>${this.controller.note.content}</textarea></div>
        </div>`;
    }

    createElement(){
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners(){
        this.element.getElementsByTagName('textarea')[0].addEventListener('input', this.controller.handleContentChange.bind(this.controller));
        this.element.getElementsByClassName('panel-title')[0].addEventListener('input', this.controller.handleTitleChange.bind(this.controller));

        let heading = this.element.firstElementChild;
        heading.addEventListener('dragstart', this.controller.handleDragStart.bind(this.controller));
        heading.addEventListener('dragend', this.controller.handleDragEnd.bind(this.controller));

        this.element.querySelector('.close-button > button').addEventListener("click", this.controller.handleDestroy.bind(this.controller));
    }


}