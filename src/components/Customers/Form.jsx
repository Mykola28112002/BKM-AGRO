// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input placeholder='Ваше ім’я' type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        <input placeholder='Номер телефону' type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <label>
        <textarea placeholder='Повідомлення ' name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Замовити дзвінок</button>
    </form>
  );
};

export default ContactForm;
