import { FC } from 'react';
import User from 'src/models/user/user';
import SignUpForm from 'src/views/components/signup/signup-form';

const SignUp: FC = () => {

    function onSubmit(user: User) {}

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm onSubmit={onSubmit}/>
        </div>
    )
};

export default SignUp;