class MouseTracker {
    constructor(){
        this.X = 0;
        this.Y = 0;
        document.addEventListener("dragover", this.handleMouseMove.bind(this));
    }

    handleMouseMove(e){
        this.X = e.clientX;
        this.Y = e.clientY;
        console.log(this.X, this.Y);
    }
}


export let mouseTracker = new MouseTracker();