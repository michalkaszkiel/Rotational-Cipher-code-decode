
class Cipher {
    constructor() {
        this.plain = "abcdefghijklmnopqrstuvwxyz";
        this.cipher = "";
        this.decoded = "";
    }
    rotate(string, index) {
        for (let i = 0; i < string.length; i++) {
            let letter = string.charAt(i);
            let letterIndex = this.plain.indexOf(letter); //indexOf() method returns the position of the first occurrence of a specified value in a string letter is a character of in alphabet (plain) and indexOf is checking its index
            if (letterIndex !== -1) { 
                let newIndex = (letterIndex + index) % this.plain.length; //% modulo (rest of division) used if index goes beyond the letter 'z'.
                let letterOfCipher = this.plain.charAt(newIndex);
                this.cipher += letterOfCipher;
            } 
  
            else {
                this.cipher += letter; // If the character is not a letter add letter without changes
            }
        }
        return this.cipher;
    }
    decode(codedString, indexOfCode) {
        for(let j = 0; j < codedString.length; j++) {
            let letter = codedString.charAt(j);
            let letterIndex = this.plain.indexOf(letter);
            if (letterIndex !== -1) {
                let newIndex = (letterIndex - indexOfCode) % this.plain.length;
                if(newIndex < 0){
                newIndex = this.plain.length + newIndex; //if newIndex is negative, it will be added to the length of the alphabet (plain) to get the correct index
                } 
                let letterOfCipher = this.plain.charAt(newIndex);
                this.decoded += letterOfCipher;
            } else {
                this.decoded += letter;
            }
    }
    return this.decoded;
    }
}
const newCipher = new Cipher();
console.log(newCipher.rotate("randompassword", 24));
console.log(newCipher.decode("pylbmknyqqumpb", 24));










