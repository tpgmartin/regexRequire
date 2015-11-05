var fs = require('fs');

module.exports = function regexRequire (directory) {

    var directories = {};

    if (directory) {
        directories = fs.readFileSync(directory, 'utf-8');
    }

    return directories;

};
