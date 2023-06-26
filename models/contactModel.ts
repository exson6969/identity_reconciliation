const db = require('../config/connection.ts')

exports.getContact = (email, phoneNumber, callback) => {
    db.query(
      `
      SELECT *
      FROM contact
      WHERE email = ? OR phoneNumber = ?
    `,
      [email, phoneNumber],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          // Find the primary contact
          const primaryContact = result.find((contact) => contact.linkPrecedence === "primary");
  
          if (!primaryContact) {
            // No primary contact found, return empty response
            callback(null, { contact: {} });
          } else {
            // Find the secondary contacts linked to the primary contact
            const secondaryContacts = result
              .filter((contact) => contact.linkedId === primaryContact.id)
              .map((contact) => contact.id);
  
            // Create the response object
            const response = {
              contact: {
                primaryContactId: primaryContact.id,
                emails: [primaryContact.email, ...result.map((contact) => contact.email).filter((email) => email !== primaryContact.email)],
                phoneNumbers: [
                  primaryContact.phoneNumber,
                  ...result.map((contact) => contact.phoneNumber).filter((phoneNumber) => phoneNumber !== primaryContact.phoneNumber)
                ],
                secondaryContactIds: secondaryContacts
              }
            };
  
            callback(null, response);
          }
        }
      }
    );
  };
  