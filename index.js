// reverse a string
function reverse(string) {
    // does not work with emojis
    // return string.split("").reverse().join("");
    // works with emojis
    return Array.from(string).reverse().join("");
}

// returns true for palindrome, false otherwise
// function palindrome(string) {
//     let processedContent = string.toLowerCase();
//     return processedContent === reverse(processedContent);
// }

/*******************
 Exercise
******************/
// return array of username and domain from email address
function emailParts(email) {
    return email.toLowerCase().split("@");
}

// Add `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Exercise:
// Add `blank` to all strings to check for empty strings
// had to google for ideas
// https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-spaces
String.prototype.blank = function() {
    // return this === this.match(/^\s*$/g);
    return this.length === 0 || /^\s*$/g.test(this);
    // return this.split(/^\s*$/g) !== 0;
}

// Exercise:
// Add a `last` method to Array prototype to return the last element
Array.prototype.last = function() {
    return this.slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    
    // Process the content to lowercase
    this.processor = function(string) {
        return string.toLowerCase();
    }

    // Returns content processed for palindrome testing.
    this.processedContent =  function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
    // Return a LOUDER version of the content
    this.louder = function louder() {
        // let louderContent = this.content.toUpperCase();
        // return louderContent;
        return this.content.toUpperCase();
    }
}

// Defines TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
TranslatedPhrase.prototype = new Phrase();