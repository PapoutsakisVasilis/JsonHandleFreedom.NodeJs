const JsonChecker = require('./JsonChecker');
const JsonDecoder = require('./JsonDecoder');
const JsonEncoder = require('./JsonEncoder');
const JsonEncryption = require('./JsonEncryption');


function JsonEncoderFree() {
    return new JsonEncoder();
}

function JsonDecoderFree() {
    return new JsonDecoder();
}

module.exports = { JsonEncoderFree, JsonDecoderFree };