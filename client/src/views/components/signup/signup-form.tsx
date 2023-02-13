import { FC, useState, ChangeEvent } from 'react';
import User from '../../../models/user/user';

const SignUpForm: FC<{ onSubmit: (user: User) => void }> = ({ onSubmit }) => {
    const [user, setUser] = useState<User>({
        firstname: '',
        lastname: '',
        id: 0,
        birthdate: '',
        email: '',
        tel: '',
        country: '',
        state: '',
        city: '',
        pc: '',
        address: ''
    });

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Traer con consulta
    function countrys() {
        return ['Argentina', 'Estados Unidos'].map((country => {
            return (<option key={country} value={country}>{country}</option>)
        }))
    }

    // Traer con consulta
    function states() {
        return ['Buenos Aires', 'La Pampa'].map((state => {
            return (<option key={state} value={state}>{state}</option>)
        }))
    }

    // Traer con consulta
    function citys() {
        return ['La Plata', 'Abasto'].map((state => {
            return (<option key={state} value={state}>{state}</option>)
        }))
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(user) }}>
            {/* First and last name */}
            <div className="row mb-4">
                {/* First name */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                {/* Last name */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" className="form-control" onChange={handleChange} />
                    </div>
                </div>
            </div>
            {/* ID and birthdate */}
            <div className="row mb-4">
                {/* ID */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="id">ID</label>
                        <input type="text" id="id" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                {/* Birthdate */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="birthdate">Birthdate</label>
                        <input type="date" id="birthdate" className="form-control" onChange={handleChange}
                            min="1930-01-01" max="2005-01-01"
                        />
                    </div>
                </div>
            </div>
            {/* Email */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" onChange={handleChange} />
            </div>
            {/* Tel */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="tel">Tel</label>
                <input type="tel" id="tel" className="form-control" onChange={handleChange} />
            </div>
            {/* Country and state */}
            <div className="row mb-4">
                {/* Country */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="country">Country</label>
                        <select id="country" className="form-select" value={user.country} onChange={handleChange}>
                            {countrys()}
                        </select>
                    </div>
                </div>
                {/* State */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="state">State</label>
                        <select id="state" className="form-select" value={user.state} onChange={handleChange}>
                            {states()}
                        </select>
                    </div>
                </div>
            </div>
            {/* City and postal code */}
            <div className="row mb-4">
                {/* City */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="city">City</label>
                        <select id="city" className="form-select" value={user.city} onChange={handleChange}>
                            {citys()}
                        </select>
                    </div>
                </div>
                {/* Postal code */}
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="pc">Postal Code</label>
                        <input type="text" id="pc" className="form-control" onChange={handleChange} />
                    </div>
                </div>
            </div>
            {/* Address */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="address">Address</label>
                <input type="text" id="address" className="form-control" onChange={handleChange} />
            </div>
            {/* Submit */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
        </form>
    )
};

export default SignUpForm;