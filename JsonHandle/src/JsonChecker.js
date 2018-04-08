class JsonChecker {
    isReallyJson(val) {
        try {
            JSON.parse(val);
        } catch (eX) {
            return false;
        }
        return true;
    }
}

module.exports = JsonChecker;