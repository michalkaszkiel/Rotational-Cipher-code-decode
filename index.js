
class Cipher {
    constructor() {
        this.plain = "abcdefghijklmnopqrstuvwxyz";
        this.cipher = "";
        this.decoded = "";
    }
    code(string, index) {
        for (let i = 0; i < string.length; i++) {
            let letter = string.charAt(i);
            let letterIndex = this.plain.indexOf(letter); //indexOf() method returns the position of the first occurrence of a specified value in a string letter is a character of in alphabet (plain) and indexOf is checking its index
            if (letterIndex !== -1) { 
                let newIndex = (letterIndex + index) % this.plain.length; //% modulo (rest of division) used if index goes beyond the letter 'z'.
                let letterOfCipher = this.plain.charAt(newIndex);//charAt() method returns the character at the specified index in a string
                this.cipher += letterOfCipher;//+= adds the letterOfCipher to the cipher
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
            } 
    }
    return this.decoded;
    }
}
const newCipher = new Cipher();
console.log(newCipher.code("randompassword", 24));
console.log(newCipher.decode("pylbmknyqqumpb", 24));










