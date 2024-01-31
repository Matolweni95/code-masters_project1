import React, { useState, useEffect } from 'react';
import { MyContext } from '../../App';
import { useContext } from 'react';
import axios from 'axios';
import '../css/Contact.css';

function ContactForm() {
    const { contextValue } = useContext(MyContext);
    const userId = contextValue;

    const [formData, setFormData] = useState({
        email: '',
        mobileNumber: '',
        address: '',
        facebookUrl: '',
        instagramUrl: '',
        tiktokUrl: '',
    });

    const [contact, setContact] = useState(null);
    const [error, setError] = useState(null);

    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJOZW8iLCJyb2xlIjoiQURNSU4iLCJpZCI6MSwibGFzdG5hbWUiOiJNYWdvbGVsYSIsImlhdCI6MTcwNTI2MzkzNywiZXhwIjoxNzA1MzUwMzM3fQ.3r4OGrvUPD2cdu1wQbgN_mPblM8e2xoDP73noVDkyps',
        'Content-Type': 'application/json',
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/contact/all')
            .then(response => {
                console.log('Fetched contact list:', response.data);
                if (response.data.length > 0) {
                    setContact(response.data[0]);
                    if (!formData.email) {
                        setFormData(response.data[0]);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [formData.email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let updatedContact;

            if (contact) {
                await axios.put(`http://localhost:8080/api/v1/contact/update/${contact.id}`, { ...formData, headers, adminId: userId });
                updatedContact = { ...contact, ...formData };
                alert("Contact details successfully updated!");
            } else {
                const response = await axios.post('http://localhost:8080/api/v1/contact/save', { ...formData, headers, adminId: userId });
                updatedContact = response.data;
                alert("Contact details successfully added!");
            }

            setContact(updatedContact);

            setFormData({
                email: '',
                mobileNumber: '',
                address: '',
                facebookUrl: '',
                instagramUrl: '',
                tiktokUrl: '',
            });
        } catch (error) {
            console.error("Error saving contact:", error);
            setError("An error occurred while saving contact details.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <section className='d-flex justify-content-center align-items-center flex-column contact' id='contact'>
            <div className="contacts">
                <h2 className="contacts">CONTACT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contacts form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="contacts"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input
                            className="contacts"
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            className="contacts"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="facebookUrl">Facebook Link:</label>
                        <input
                            className="contacts"
                            type="url"
                            id="facebookUrl"
                            name="facebookUrl"
                            value={formData.facebookUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="instagramUrl">Instagram Link:</label>
                        <input
                            className="contacts"
                            type="url"
                            id="instagramUrl"
                            name="instagramUrl"
                            value={formData.instagramUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="tiktokUrl">TikTok Link:</label>
                        <input
                            className="contacts"
                            type="url"
                            id="tiktokUrl"
                            name="tiktokUrl"
                            value={formData.tiktokUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-btn__container">
                        <button className="contacts" type="submit">
                            {contact ? 'SAVE CHANGES' : 'SAVE CONTACT'}
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
