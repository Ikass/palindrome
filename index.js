module.exports = Phrase;

// Add `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
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