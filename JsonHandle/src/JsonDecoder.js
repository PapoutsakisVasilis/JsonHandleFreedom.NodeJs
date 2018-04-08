const JsonChecker = require('./JsonChecker');
const JsonEncrypt = require('./JsonEncryption');
const JsonEncoder = require('./JsonEncoder');


class JsonDecoder {

    constructor() {

    }

    analyzeJson(obj, type = 'object', requirePath = false, setThePrivates = false) {
        if (type != 'object' && requirePath != false) {
            if (obj instanceof Object && !(obj instanceof Array) && !(typeof obj == 'string') && isNaN(obj)) {
                const theClassR = requirePath;
                if (setThePrivates === false) {
                    var theBind = new theClassR;
                    for (var prop in obj) {
                        theBind[prop] = obj[prop];
                    }

                    return theBind;
                } else {

                    var theBind = new theClassR;

                    for (var prop in obj) {
                        if (prop === 'FrPrivate') {
                            var arrayFrP = new Array;
                            var temp = obj[prop];
                            for (var index in temp) {
                                for (var mIndexP in temp[index]) {
                                    try {
                                        theBind['set_' + mIndexP](temp[index][mIndexP]);
                                    } catch (ex) {
                                        var theObjByPr = new Object;
                                        theObjByPr[mIndexP] = temp[index][mIndexP];
                                        arrayFrP.push(theObjByPr);
                                    }

                                }

                            }
                            theBind['FrPrivate'] = arrayFrP;
                        } else {
                            theBind[prop] = obj[prop];
                        }


                    }

                }

                return theBind;



            } else {
                return obj;
            }
        } else {
            return obj;
        }
    }


    decodeMain(json, type, requirePath, setThePrivates) {
        var jsonCHECK = new JsonChecker();
        if (jsonCHECK.isReallyJson(json)) {

            return this.analyzeJson(JSON.parse(json), type, requirePath, setThePrivates);
        } else {
            return false;
        }

    }

    //There Are No Associative Arrays So Will Always Return Objects

    decodeJsonFree(json, type = 'object', pass = false, requirePath = false, setThePrivates = false) {

        var jsonCHECK = new JsonChecker();
        if (pass != false) {
            json = JsonEncrypt.decrypt(json, pass);
            return this.decodeMain(json, type, requirePath, setThePrivates);
        } else {
            return this.decodeMain(json, type, requirePath, setThePrivates);
        }
    }

}

module.exports = JsonDecoder;