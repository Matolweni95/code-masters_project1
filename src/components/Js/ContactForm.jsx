import React, { useState } from 'react';
import axios from 'axios';
import '../css/Contact.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        mobileNumber: '',
        address: '',
        facebookLink: '',
        instagramLink: '',
        tiktokLink: '',
    });

    const [ contactList, setContactList] = useState([]);

  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        
                const response = await axios.post('http://localhost:8080/api/contact/save', formData);
                setContactList(response.data);
            
        } catch (error) {
            console.error("Error saving contact:", error);
        }
        console.log(formData);
    };


    return (
        <section className=' d-flex justify-content-center align-items-center flex-column contact' id='contact'>
            <div className="contacts">
                <h2 className="contacts">CONTACT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contacts form-group">
                        <label htmlFor="email">Email:</label>
                        <input className="contacts"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input className="contacts"
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea className="contacts"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="facebookLink">Facebook Link:</label>
                        <input className="contacts"
                            type="url"
                            id="facebookLink"
                            name="facebookLink"
                            value={formData.facebookLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="instagramLink">Instagram Link:</label>
                        <input className="contacts"
                            type="url"
                            id="instagramLink"
                            name="instagramLink"
                            value={formData.instagramLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts form-group">
                        <label htmlFor="tiktokLink">TikTok Link:</label>
                        <input className="contacts"
                            type="url"
                            id="tiktokLink"
                            name="tiktokLink"
                            value={formData.tiktokLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-btn__container">
                        <button className="contacts" type="submit">SAVE CHANGES</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
