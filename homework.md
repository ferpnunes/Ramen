// susikurti input'ą, kuris priima tik skaičius ir atnaujinti age kintamąjį.
const [age, setAge] = useState(42);

// susikurti input'ą, kuris priima tekstą ir atnaujinti fruit kintamąjį.
const [fruit, setFruit] = useState("banana");

// susikurti input'ą ir mygtuką. Input'as turėtų priimti tekstą. Paspaudus mygtuką turėtų pridėti tekstą į animals masyvą.
const [animals, setAnimals] = useState(["dog"]);

// susikurti input'ą ir mygtuką. Input'as turėtų priimti tekstą. Paspaudus mygtuką turėtų pakeisti todo tekstą.
const [todos, setTodos] = useState({ todo: "learn" });
