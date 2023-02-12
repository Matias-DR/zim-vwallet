import React, { useState } from 'react';
import User from '../../../models/user/user';

export default function SignUpForm(action) {
    const [user, setUser] = useState<User>({
        name: '',
        lastname: '',
        id: 0,
        birthdate: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        pc: '',
        address: ''
    });

    function validateForm() {
        return false
    }

    function onSubmit() {
        if (validateForm()) {
            action(user);
        } else {
        }
    }

    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Lohana" onChange={(e) => { setUser({ ...user, name: e.target.value }) }}></input>
            </div>
            <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastname" placeholder="Moses" onChange={(e) => { setUser({ ...user, lastname: e.target.value }) }}></input>
            </div>
            <div className="col-12">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="number" className="form-control" id="id" placeholder="12345678" onChange={(e) => { setUser({ ...user, id: Number(e.target.value) }) }}></input>
            </div>
            <div className="col-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="example@dom.com" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
            </div>
            <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" onChange={(e) => { setUser({ ...user, phone: e.target.value }) }}></input>
            </div>
            <div className="col-md-3">
                <label htmlFor="country" className="form-label">Country</label>
                <select id="country" className="form-select">
                    <option selected>Argentina</option>
                    <option>Australia</option>
                    <option>Alemania</option>
                    <option>Estados Unidos</option>
                    <option>Nicaragua</option>
                    <option>Mexico</option>
                    <option>Suecia</option>
                    <option>Rusia</option>
                </select>
            </div>
            <div className="col-md-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" id="state" onChange={(e) => { setUser({ ...user, state: e.target.value }) }}></input>
            </div>
            <div className="col-md-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" onChange={(e) => { setUser({ ...user, city: e.target.value }) }}></input>
            </div>
            <div className="col-md-3">
                <label htmlFor="pc" className="form-label">PC</label>
                <input type="text" className="form-control" id="pc" onChange={(e) => { setUser({ ...user, pc: e.target.value }) }}></input>
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" onChange={(e) => { setUser({ ...user, address: e.target.value }) }}></input>
            </div>
            <div className="col-4">
                <button className="btn btn-primary" onClick={onSubmit}>Sign up</button>
            </div>
        </form>
    )
}