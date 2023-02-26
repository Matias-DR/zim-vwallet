// React
import { FC } from 'react';

// Hooks
import useUser from 'src/shared/hooks/useUser'

// Module views
import VSignUp from '../views/v-signup';

// Models
import User from "src/models/user/user";

const CSignUp: FC = () => {
    const { user, handleChange } = useUser();
    const signup = (user: User) => { console.log(user) }

    return (
        <VSignUp signup={signup} user={user} handleChange={handleChange} />
    )
}

export default CSignUp;