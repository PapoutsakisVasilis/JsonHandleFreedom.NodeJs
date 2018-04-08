const crypto = require('crypto');



function encrypt(json, pass) {
    //const ENCRYPTION_KEY = pass;
    var genRandomString = function(length) {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length);
    };
    var lengther = pass.toString('hex').length;
    var salter = genRandomString(31 - lengther);
    let iv = genRandomString(16);
    let mainCipher = crypto.createCipheriv('aes-256-cbc', new Buffer(salter + ':' + pass.toString('hex')), iv);
    let encryptedMsg = mainCipher.update(json);

    encryptedMsg = Buffer.concat([encryptedMsg, mainCipher.final()]);

    return salter + ':' + iv + ':' + encryptedMsg.toString('base64');
}

function decrypt(text, pass) {
    let textParts = text.split(':');
    var salt = textParts[0].toString('hex');
    let iv = textParts[1].toString('hex');
    let encryptedText = new Buffer(textParts[2], 'base64').toString('hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(salt + ':' + pass.toString('hex')), iv);
    let decrypted = decipher.update(encryptedText, 'hex');
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}



module.exports = { decrypt, encrypt };