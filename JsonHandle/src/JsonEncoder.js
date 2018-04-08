/**
 * 
 * Always For Libraries Compatibility 
 * For deferent Programming Languages,
 * FrStatic must be array of objects
 * and the same structure for FrPrivate.
 * On JSON decode by choosing a binding Class the FrStatic will be the static vars of the class,
 * the Private  will be the private vars
 * the Class that will be binned must have getters and setters for PRIVATES.
 * 
 */

const JsonChecker = require('./JsonChecker');
const JsonEncrypt = require('./JsonEncryption');

class JsonEncoder {

    constructor() {

    }

    analyzeObj(obj) {

        var de = new JsonEncoder();
        var jsonCHECK = new JsonChecker();

        if (obj instanceof Object && !(obj instanceof Array) && !(typeof obj == 'string') && isNaN(obj)) {
            var mainerA = new Object;
            var props = Object.getOwnPropertyNames(obj);
            var de = new JsonEncoder();
            for (var indexer in props) {
                var element = props[indexer];
                var elementMain = '';
                if (element.search("_") == 0) {
                    var elTmp = element.toString();
                    elementMain = elTmp.replace('_', '');
                } else {
                    elementMain = element;
                }
                if (elementMain === 'FrStatic' || elementMain === 'FrPrivate') {
                    if (elementMain === 'FrStatic') {
                        if (obj[element] instanceof Array) {
                            var frMain = new Array;
                            for (var index in obj[element]) {

                                frMain.push(de.analyzeObj(obj[element]));
                            }
                            mainerA[elementMain] = frMain;
                        } else {
                            var frMain = new Array;
                            frMain.push(de.analyzeObj(obj[element]));
                            mainerA[elementMain] = frMain;
                        }
                    } else {
                        if (obj[element] instanceof Array) {
                            var frMain = new Array;
                            for (var index in obj[element]) {

                                frMain.push(de.analyzeObj(obj[element]));
                            }
                            mainerA[elementMain] = frMain;
                        } else {
                            var frMain = new Array;
                            frMain.push(de.analyzeObj(obj[element]));
                            mainerA[elementMain] = frMain;
                        }
                    }



                } else {
                    mainerA[elementMain] = de.analyzeObj(obj[element]);

                }
            }
            return mainerA;
        } else if (obj instanceof Array) {
            var newAr = new Array;
            var counterRecs = obj.length;
            var de = new JsonEncoder();
            for (var index in obj) {
                newAr[index] = de.analyzeObj(obj[index]);
            }



            return newAr;

        } else if (typeof obj === 'string' || obj instanceof String) {
            if (jsonCHECK.isReallyJson(obj)) {
                var de = new JsonEncoder();

                obj = de.analyzeObj(JSON.parse(obj));
            }
            return obj;
        } else if (obj > 0 || obj < 0 || obj == 0) {
            return obj;
        }

    }

    encodeMain(obj, prepare_mode = false, pass = false) {
        if (!prepare_mode) {
            if (pass != false) {
                return JsonEncrypt.encrypt(JSON.stringify(this.analyzeObj(obj)), pass);
            } else {
                return JSON.stringify(this.analyzeObj(obj));
            }

        } else {
            return this.analyzeObj(obj);
        }
    }

    encodeJsonFree(objectMain, preparemode = false, pass = false) {
        return this.encodeMain(objectMain, preparemode, pass);
    }
}



module.exports = JsonEncoder;