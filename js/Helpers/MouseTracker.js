class MouseTracker {
    constructor(){
        this.X = 0;
        this.Y = 0;
        document.addEventListener("dragover", this.handleMouseMove.bind(this));
    }

    handleMouseMove(e){
        this.X = e.clientX;
        this.Y = e.clientY;
    }
}


export let mouseTracker = new MouseTracker();