const express = require("express");
const PORT = process.env.PORT || 6000;
const server = express();
const fs = require('fs');

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/cipher", (req, res) => {
    res.status(200).send(caesarCipher(req.query.message, parseInt(req.query.key)));
});

server.get("/api/bruteforce", (req, res) => {
    res.status(200).send(bruteforce(req.query.message));
});

function caesarCipher(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text[i].charCodeAt();

        if (charCode > 96 && charCode < 123) {
            charCode += shift % 26

            if (charCode > 122) {
                charCode = (charCode - 122) + 96;
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
        }

        if (charCode > 64 && charCode < 91) {
            charCode += shift % 26

            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }

        result += String.fromCharCode(charCode);
    }
    return result
}

function bruteforce(message) {
    for (let key = 0; key < 25; key++) {
        const decryptedMessage = caesarCipher(message.toLowerCase(), parseInt(-(key)));
        const decryptedWords = decryptedMessage.split(' ');
        const isDecrypted = Array.from({ length: decryptedWords.length }, () => false);;

        for (let i = 0; i < decryptedWords.length; i++) {
            if (isValidEnglish(decryptedWords[i]) || isValidItalian(decryptedWords[i])) {
                isDecrypted[i] = true;
            }
        }

        console.log(`----------${key + 1}----------`);
        console.log(decryptedMessage);
        console.log(isDecrypted);
        console.log();

        if (calculateTruePercentage(isDecrypted) > 60) {
            return {
                'key': key,
                'message': decryptedMessage,
            };
        }
    }

    return null;
}

function isValidEnglish(message) {
    const data = readTextFile('./english.txt');
    const list = data.split('\n');

    for (let i = 0; i < list.length; i++) {
        if (list[i] === message) {
            return true;
        }
    }

    return false;
}

function isValidItalian(message) {
    const data = readTextFile('./italian.txt');
    const list = data.split('\n');

    for (let i = 0; i < list.length; i++) {
        if (list[i] === message) {
            return true;
        }
    }

    return false;
}

function readTextFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(error);
    }
}

function calculateTruePercentage(arr) {
    const trueElements = arr.filter(element => element === true).length;
    return (trueElements / arr.length) * 100;
}