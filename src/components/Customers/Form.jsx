// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        message: '',
    });
    const [diasabled, setDiasabled] = useState(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (formData.name.length <= 0) { 
            setDiasabled(true)
        } else {
            setDiasabled(false)
        }
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Form data submitted:', formData.name);
        console.log('Form data submitted:', formData.phoneNumber);
        if (formData.name.length <= 0) {
            console.log('!!!!!!!!!!!!!!!!');
        } else {
            console.log('Form data submitted:', formData);
            setFormData({
                name: '',
                phoneNumber: '',
                message: '',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Ваше ім’я' type="text" name="name" value={formData.name} onChange={handleChange} />
            <input placeholder='Номер телефону' type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <textarea placeholder='Повідомлення ' name="message" value={formData.message} onChange={handleChange} />
            <button
                disabled={diasabled}
                style={{ opacity: diasabled ? 0.7 : 1 }}
                type="submit">
                Замовити дзвінок
            </button>
        </form>
    );
};

export default ContactForm;
