
const encipher = (str) => {
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let cipher = "8t1S6a%3l4b5A$2s9igN@idOc#"
let encipheredString = "";
str = str.toLowerCase()
for(let i=0; i<str.length; i++) {
    let letter = alphabet.indexOf(str[i]);
    let encipheredLetter = cipher[letter];
    let space = " "
    if(str[i] === " ") {
        encipheredString+= space;
    }else {
        encipheredString+= str[i].replace(str[i],encipheredLetter)
    }
}
return encipheredString;
}

console.log(encipher("Cryptography is the best"))