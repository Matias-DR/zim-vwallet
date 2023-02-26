import axios from 'axios';
import User from "src/models/user/user";

const postNewUser = (user: User): string[] => {
    let places: string[] = [];

    console.log(user);

    axios.post('http://127.0.0.1:8000/api/new-user', user)
        .then(res => { })
        .catch(err => console.log(err));

    return places;
};

export default postNewUser;