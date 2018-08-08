'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.pitch = pitch;

exports.default = function (content) {
    return content;
};

function pitch() {
    if (this.target === 'web') {
        return;
    }

    this.clearDependencies();
    return '';
}
