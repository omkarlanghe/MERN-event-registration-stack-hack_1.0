
const validator = require('validator').default;

exports.eventValidator = (p_data) => {
    let bool_flag_isValid = true;
    let errors = {};
    let only_spaces = /^\s*$/;

    if (only_spaces.test(p_data.fullName) ||  validator.isEmpty(p_data.fullName)) {
        errors.name = 'Please provide full name';
        bool_flag_isValid = false;
    }

    if (only_spaces.test(p_data.mobile) || validator.isEmpty(p_data.mobile)) {
        errors.mobile = 'Please provide valid contact number';
        bool_flag_isValid = false;
    }
    if (validator.isEmpty(p_data.email)) {
        errors.email = 'Please provide email address';
        bool_flag_isValid = false;
    }

    if (validator.isEmpty(p_data.registrationType)) {
        errors.registrationType = 'Please registration type';
        bool_flag_isValid = false;
    }

    if (!validator.isEmail(p_data.email)) {
        errors.email = 'Please provide valid email address';
        bool_flag_isValid = false;
    }
    return ({ 'errors': errors, 'flag': bool_flag_isValid });
};
