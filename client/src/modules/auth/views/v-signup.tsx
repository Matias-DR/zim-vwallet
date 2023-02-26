// React
import { ChangeEvent, FC } from 'react';

// Models
import User from "src/models/user/user";

// Components
import SelectCountry from '../components/select-place/select-country';
import SelectState from '../components/select-place/select-state';
import SelectCity from '../components/select-place/select-city';

export interface VSignUpInterface {
    user: User,
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    signup: (user: User) => void
}

const VSignUp: FC<VSignUpInterface> = ({ signup, user, handleChange }) => (
    <form>
        <div className='row'>
            {/* First name */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='firstname'>First Name</label>
                    <input
                        className='form-control' type='text' id='firstname'
                        value={user.firstname} onChange={handleChange}
                    />
                </div>
            </div>
            {/* Last name */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='lastname'>Last Name</label>
                    <input
                        className='form-control' type='text'
                        id='lastname' onChange={handleChange}
                    />
                </div>
            </div>
            {/* ID */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='id'>ID</label>
                    <input
                        className='form-control' type='text' id='id' onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className='row'>
            {/* Birthdate */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='birthdate'>Birthdate</label>
                    <input className='form-control'
                        type='date' id='birthdate' onChange={handleChange}
                        min={'1930-01-01'} max={'2005-01-01'}
                    />
                </div>
            </div>
            {/* Email */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input
                        className='form-control' type='email' id='email' onChange={handleChange}
                    />
                </div>
            </div>
            {/* Tel */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='tel'>Tel</label>
                    <input
                        className='form-control' type='tel' id='tel' onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className='row'>
            {/* Country */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='country'>Country</label>
                    <SelectCountry setCountry={handleChange} />
                </div>
            </div>
            {/* State */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='state'>State</label>
                    <SelectState
                        setState={handleChange}
                        country={user.country}
                    />
                </div>
            </div>
            {/* City */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='city'>City</label>
                    <SelectCity
                        setCity={handleChange}
                        country={user.country}
                        state={user.state}
                    />
                </div>
            </div>
        </div>
        <div className='row'>
            {/* Postal code */}
            <div className='col'>
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='pc'>Postal Code</label>
                    <input
                        className='form-control' type='text' id='pc' onChange={handleChange}
                    />
                </div>
            </div>
            {/* Address */}
            <div className='form-outline mb-4'>
                <label className='form-label' htmlFor='address'>Address</label>
                <input
                    className='form-control' type='text' id='address' onChange={handleChange}
                />
            </div>
        </div>
        {/* Submit */}
        <div className='row text-center'>
            <div className='col'>
                <button
                    className='btn btn-primary btn-block mb-4 w-25'
                    onClick={() => signup(user)}
                >Sign Up</button>
            </div>
        </div>
    </form>
);

export default VSignUp;