"use strict";

import {NewButtonController} from "./NewNoteButton/NewButtonController.js";
import {NewButtonView} from "./NewNoteButton/NewButtonView.js";
import {storage} from "./Storage/Storage.js";




let buttonController = new NewButtonController();
let buttonView = new NewButtonView(buttonController);

let container = document.getElementsByClassName("container")[0];
container.appendChild(buttonView.element);


// for(note of storage.notes){
//
// }