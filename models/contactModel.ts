const db = require('../config/connection.ts')

exports.getContact = (email, phoneNumber, callback) => {
    db.query(`
    SELECT *
    FROM contact
    WHERE email = ? OR phoneNumber = ?
  `, [email, phoneNumber], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }

    });

};