class Poem {

    constructor(name, text) {

        this.name = name;
        this.text = text;

    }

}

const title = document.getElementById("poem-title");
const text = document.getElementById("poem-text");
const poems = [];

poems.push(new Poem("Sample", "Lorem Ipsum..."));

function display(poem) {

    title.innerText = poem.name;
    text.innerText = poem.text;

}

display(poems[0]);
