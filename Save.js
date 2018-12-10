class Save {
    constructor() {

    }

    saveInLocal(id, Note) {
       localStorage.setItem(id, JSON.stringify(Note));
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
}