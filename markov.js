/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {}; // initialize empty object 
    for (let i = 0; i < this.words.length; i++){
      let word = this.words[i]; // current word
      let nextWord = this.words[i + 1] || null; // next word, or null if last word

      // if word is not already in chains, add it with an empty array 

      if (!this.chains[word]){
        this.chains[word] = [];
      }

      // push nextWord to the array of possible next words 
      this.chains[word].push(nextWord);
    }

  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Object.keys(this.chains); // get all words
    let word = keys[Math.floor(Math.random() * keys.length)]; // pick random starting word
    let output = [];

    while (output.length < numWords && word != null){
      output.push(word);
      
      let nextWords = this.chains[word];
      word = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
    return output.join(" ");
  }
}

module.exports = { MarkovMachine };