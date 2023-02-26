// React
import { useState, useEffect, ChangeEvent } from 'react';

// Models
import User from "src/models/user/user";

// Constants
import { USER } from 'src/constants'

const useUser = (initialValues: User = USER) => {
    const [user, setUser] = useState<User>(initialValues);

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });
    }

    return { user, handleChange };
};

export default useUser;