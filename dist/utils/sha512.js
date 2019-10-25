"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha512 = require('js-sha512').sha512;
exports.encrypttext2 = function (text) {
    return sha512(text);
};
