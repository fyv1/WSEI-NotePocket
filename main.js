let note = new Note("1", "random", "hello", "1", "red");
let note2 = new Note("2", "kappa", "lipsum", "2", "green");
let storage = new Storage();

let title = document.querySelector("title").value;
console.log(title);
//save to array (push), then display each array element as single note, but array set in local storage

storage.saveInLocal(note.id, note);
storage.saveInLocal(note2.id, note2);

storage.removeFromLocal("undefined");
 
for(let key in localStorage) { 
    storage.display(key); 
}


// Note display() method will display data got from Storage object