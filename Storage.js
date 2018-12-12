class Storage {
    constructor() {

    }

    saveInLocal(id, note) {
       localStorage.setItem(id, JSON.stringify(note));
    }

    removeFromLocal(id) {
        localStorage.removeItem(id);
    }

    getFromLocal(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    resetLocal() {
        localStorage.clear();
    }

    //todo
    display(id) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.background = this.getFromLocal(id).color;
        noteDiv.innerHTML = this.getFromLocal(id).content;

        
        document.querySelector("#content").appendChild(noteDiv);  // = "<div class=\"note\" style=\"background-color: "+this.getFromLocal(id).color+"\">"+ this.getFromLocal(id).content +"</div>";

    }
}