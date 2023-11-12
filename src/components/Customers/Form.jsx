// ContactForm.js
import React, { useState } from 'react';
import css from './styles.module.scss';
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';
import { Check } from '../../assets/svgComponents/Check';

const ContactForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (formData.name.length <= 0) {
            console.log('!!!!!!!!!!!!!!!!');
        } else {
            setFormData({
                name: '',
                phoneNumber: '',
                message: '',
            });
        }
        const serviceId = 'service_y545qpg';
        const templateId = 'template_58mac2i';
        const userId = '685QO5Je5D_QH2K8C';

        const smsData = {
            name: formData.name,
            number: formData.phoneNumber,
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, smsData, userId)
            .then((response) => {
                console.log('SMS sent successfully:', response.status);
                setModalIsOpen(true)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error sending SMS:', error);
                setIsLoading(false)
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            {isLoading &&
                <div className={css.loaderBox}>
                    <div className={css.loader}></div>
                </div>
            }
            <input className={css.InputStl} placeholder='Ваше ім’я' type="text" name="name" value={formData.name} onChange={handleChange} />
            <input className={css.InputStl} placeholder='Номер телефону' type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <textarea className={css.InputStl} placeholder='Повідомлення ' name="message" value={formData.message} onChange={handleChange} />
            <button
                className={css.submitBtn}
                disabled={diasabled}
                style={{ opacity: diasabled ? 0.7 : 1 }}
                type="submit">
                Відправити
            </button>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <div  className={css.modalBox}>
                    <p className={css.modalText}>Надіслано!</p>
                    <div style={{paddingLeft: 25}}><Check  /></div>
                    
                </div>
            </Modal>
        </form>
    );
};

export default ContactForm;
