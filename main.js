let note = new Note("1", "random", "hello", "1", "green");
let save = new Save();

save.saveInLocal(note.id, note);
console.log(save.getFromLocal(note.id));

