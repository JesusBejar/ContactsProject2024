const validator = require('../helpers/validate');
// below is a middleware function
const saveContact = (req, res, next) => {
    // validation rules
    const validationRule = {
        "firstName": "required|string",
        "lastName": "required|string",
        "email": "required|email",
        "favColor": "required|string",
        "bday": "string"
    };

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            // 412 also works
            res.status(500).send({
                success: false,
                message: 'Validation unsucessful good sir',
                data: err
            });
        } else {
            // next moves on from this function to createUser or updateUser
            // found in contacts.js lines 10 & 12
            next();
        }
    });
};
module.exports = {
    saveContact
};