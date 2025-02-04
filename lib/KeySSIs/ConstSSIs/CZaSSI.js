const KeySSIMixin = require("../KeySSIMixin");
const SSITypes = require("../SSITypes");

function CZaSSI(enclave, identifier) {
    if (typeof enclave === "string") {
        identifier = enclave;
        enclave = undefined;
    }
    KeySSIMixin(this, enclave);
    const self = this;
    if (typeof identifier !== "undefined") {
        self.autoLoad(identifier);
    }

    self.getTypeName = function () {
        return SSITypes.CONSTANT_ZERO_ACCESS_SSI;
    }

    self.initialize = (dlDomain, hpk, vn, hint) => {
        self.load(SSITypes.CONSTANT_ZERO_ACCESS_SSI, dlDomain, '', hpk, vn, hint);
    };

    

    self.canAppend = function(){
        return false;
    }
}

function createCZaSSI(enclave, identifier) {
    return new CZaSSI(enclave, identifier);
}

module.exports = {
    createCZaSSI
};
