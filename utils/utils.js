const crypto = require('crypto');

exports.hash = (password, salt=null) => {
    salt = salt || crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
    return hash;
};

exports.generatePassword = (password, salt=null) => {
    salt = salt || crypto.randomBytes(16).toString('base64');
    let hash = this.hash(password, salt);
    return password = salt + "$" + hash;
}