const { MarkovMachine } = require("./markov");

// Test case 1: Basic chain creation
function testChains() {
    let mm = new MarkovMachine("the cat in the hat");
    console.log("Chains:", mm.chains);

    console.assert(mm.chains["the"].includes("cat"), "'the' should lead to 'cat'");
    console.assert(mm.chains["the"].includes("hat"), "'the' should lead to 'hat'");
    console.assert(mm.chains["cat"].includes("in"), "'cat' should lead to 'in'");
    console.assert(mm.chains["hat"].includes(null), "'hat' should lead to null");
}

// Test case 2: Generating text
function testGeneratedText() {
    let mm = new MarkovMachine("the cat in the hat");

    let text = mm.makeText(10);
    console.log("Generated Text:", text);

    // Make sure text contains only words from the input
    let words = text.split(" ");
    let validWords = ["the", "cat", "in", "hat"];
    for (let word of words) {
        console.assert(validWords.includes(word), `Invalid word found: ${word}`);
    }
}

testChains();
testGeneratedText();
console.log("All tests passed!");