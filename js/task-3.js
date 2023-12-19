class StringBuilder {
    #value = "";
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
      return  this.#value;
    }
    padEnd(str) {
        this.#value.concat(str);
    }
    padStart(str) {
        this.#value = str.concat(this.#value);
        return this.#value;
    }
    
    padBoth(str) {

    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="