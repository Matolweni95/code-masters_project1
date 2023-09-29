import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {

    // Set Field Names
    const [formData, setFormData] = useState({
        email: '',
        mobileNumber: '',
        address: '',
        facebookLink: '',
        instagramLink: '',
        tiktokLink: '',
    });

    // Handle Changes on the fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission logic here
        // For now, let's just log the form data
        console.log(formData);
    };

    return (
        <div>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="facebookLink">Facebook Link:</label>
                    <input
                        type="url"
                        id="facebookLink"
                        name="facebookLink"
                        value={formData.facebookLink}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instagramLink">Instagram Link:</label>
                    <input
                        type="url"
                        id="instagramLink"
                        name="instagramLink"
                        value={formData.instagramLink}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tiktokLink">TikTok Link:</label>
                    <input
                        type="url"
                        id="tiktokLink"
                        name="tiktokLink"
                        value={formData.tiktokLink}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
