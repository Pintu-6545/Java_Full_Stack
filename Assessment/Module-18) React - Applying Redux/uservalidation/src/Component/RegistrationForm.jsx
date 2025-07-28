import React from 'react';
import { useDispatch } from 'react-redux';;
import useFormValidate from './useFormValidate';
import { registerUser } from '../Slice/userSlice';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaGlobe, FaCode } from 'react-icons/fa';
import '../../src/assets/form.css'

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6789][0-9]{9}$/;

    //  useFormValidate is Custom hook
    const email = useFormValidate('', (val) => {
    if (emailRegex.test(val)) {
        return false;
    } else {
        return 'Invalid Email Address';
    }
});

const password = useFormValidate('', (val) => {
    if (val.length >= 6) {
         return false;
    } else {
        return 'Password must be at least 6 characters';
    }
});

const retypePassword = useFormValidate('', (val) => {
    if (val === password.value) {
        return false;
    } else {
        return 'Passwords do not match';
    }
});

const firstName = useFormValidate('', (val) => {
    if (val) {
        return false;
    } else {
        return 'First Name is required';
    }
});

const lastName = useFormValidate('', (val) => {
    if (val) {
       return false;
    } else {
        return 'Last Name is required';
    }
});

const phone = useFormValidate('', (val) => {
    if (phoneRegex.test(val)) {
        return false;
    } else {
        return 'Invalid Phone Number';
    }
});

const address = useFormValidate('', (val) => {
    if (val) {
        return false;
    } else {
        return 'Address is required';
    }
});

const town = useFormValidate('', (val) => {
    if (val) {
         return false;
    } else {
        return 'Town is required';
    }
});

const region = useFormValidate('', (val) => {
    if (val) {
        return false;
    } else {
        return 'Region is required';
    }
});

const postcode = useFormValidate('', (val) => {
    if (val) {
        return false;
    } else {
        return 'Postcode is required';
    }
});

const country = useFormValidate('United Kingdom', () => {
     return false;
});


const username = useFormValidate('', (val) => {
    if (val.length <= 4) {
         return false;
    } else {
        return 'Username must be <= 4 characters';
    }
});


   const handleSubmit = (e) => {
    e.preventDefault();

    // trigger all validate feilds 
    email.validate();
    password.validate();
    retypePassword.validate();
    firstName.validate();
    lastName.validate();
    phone.validate();
    address.validate();
    town.validate();
    region.validate();
    postcode.validate();
    username.validate();

    // Check if ANY field is empty
    const isAnyFieldEmpty =
        !email.value.trim()
        !password.value.trim()
        !retypePassword.value.trim()
        !firstName.value.trim() 
        !lastName.value.trim() 
        !phone.value.trim() 
        !address.value.trim() 
        !town.value.trim()
        !region.value.trim()
        !postcode.value.trim() 
        !username.value.trim();

    // Check if ANY field has an error
    const isAnyFieldInvalid =
        email.error ||
        password.error ||
        retypePassword.error ||
        firstName.error ||
        lastName.error ||
        phone.error ||
        address.error ||
        town.error ||
        region.error ||
        postcode.error ||
        username.error;

    if (isAnyFieldEmpty || isAnyFieldInvalid) {
        alert('Please fill all fields correctly before submitting form.');
        return false;
    }

    // All fields are valid - Submit
    dispatch(registerUser({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        address: address.value,
        town: town.value,
        region: region.value,
        postcode: postcode.value,
        country: country.value,
        username: username.value
    }));

    alert('Form Submitted Successfully!');
};

    return (
        <form className="form-container" >
            <h2>User Registration</h2>

            <div className="input-group">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email" value={email.value} onChange={email.onChange} />
            </div>
            <div className="error">{email.error}</div>

            <div className="input-group">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" value={password.value} onChange={password.onChange} />
            </div>
            <div className="error">{password.error}</div>

            <div className="input-group">
                <FaLock className="icon" />
                <input type="password" placeholder="Retype Password" value={retypePassword.value} onChange={retypePassword.onChange} />
            </div>
            <div className="error">{retypePassword.error}</div>

            <div className="input-group">
                <FaUser className="icon" />
                <input type="text" placeholder="First Name" value={firstName.value} onChange={firstName.onChange} />
            </div>
            <div className="error">{firstName.error}</div>

            <div className="input-group">
                <FaUser className="icon" />
                <input type="text" placeholder="Last Name" value={lastName.value} onChange={lastName.onChange} />
            </div>
            <div className="error">{lastName.error}</div>

            <div className="input-group">
                <FaPhone className="icon" />
                <input type="text" placeholder="Phone Number" value={phone.value} onChange={phone.onChange} />
            </div>
            <div className="error">{phone.error}</div>

            <div className="input-group">
                <FaMapMarkerAlt className="icon" />
                <input type="text" placeholder="Address" value={address.value} onChange={address.onChange} />
            </div>
            <div className="error">{address.error}</div>

            <div className="input-group">
                <FaCity className="icon" />
                <input type="text" placeholder="Town" value={town.value} onChange={town.onChange} />
            </div>
            <div className="error">{town.error}</div>

            <div className="input-group">
                <FaGlobe className="icon" />
                <input type="text" placeholder="Region" value={region.value} onChange={region.onChange} />
            </div>
            <div className="error">{region.error}</div>

            <div className="input-group">
                <FaCode className="icon" />
                <input type="text" placeholder="Postcode / Zip" value={postcode.value} onChange={postcode.onChange} />
            </div>
            <div className="error">{postcode.error}</div>

            <div className="input-group">
                <FaUser className="icon" />
                <input type="text" placeholder="User Name" value={username.value} onChange={username.onChange} />
            </div>
            <div className="error">{username.error}</div>

            <div className="input-group">
                <FaGlobe className="icon" />
                <select value={country.value} onChange={country.onChange}>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                </select>
            </div>

            <button type="submit" className="submit-btn" onClick={handleSubmit}>Register</button>
        </form>
    );
};

export default RegistrationForm;
