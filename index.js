module.exports = Phrase;

// Add `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    
    // Returns the letters in the content.
    // E.g.: new Phrase("Hello, World!").letters() === "Helloworld"
    this.letters = function letters() {

        // match any letter, case-insensitive
        const letterRegex = /[a-z]/gi;

        return (this.content.match(letterRegex) || []).join("");
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();    
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
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