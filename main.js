let note = new Note("1", "random", "hello", "1", "red");
let note2 = new Note("2", "kappa", "lipsum", "2", "green");
let storage = new Storage();

storage.saveInLocal(note.id, note);

storage.saveInLocal(note2.id, note2);

storage.display(note.id);   
storage.display(note2.id);   

// Note display() method will display data got from Storage object