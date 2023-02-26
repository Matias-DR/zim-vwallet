// Models
import User from "src/models/user/user";

// Initial values for hooks

export const USER: User = {
    firstname: '',
    lastname: '',
    id: '',
    birthdate: '',
    email: '',
    tel: '',
    country: '',
    state: '',
    city: '',
    pc: '',
    address: ''
};

// Default values for attributes of HTML elements

export const INVALID_FEEDBACK = 'Please provide a valid input';