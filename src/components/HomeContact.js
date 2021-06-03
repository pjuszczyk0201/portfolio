import React, {useEffect, useState} from 'react';
import Headers from "./Headers";

const HomeContact = () => {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const validateForm = () => {
        if(!name) {
            return "Imię jest wymagane";
        }
        if(!contact) {
            return "E-mail jest wymagany";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contact)) {
            return "Zły e-mail"
        }
        if (!message) {
            return "Wiadomość nie może być pusta";
        } else if   (message.length < 20) {
            return "Wiadomość musi mieć conajmniej 120 znaków"
        }
        return <alert style={successStyle}>Wiadomść została wysłana! Wkrótce się z tobą skonkatujemy</alert>
    }

    const successStyle ={
        color: "green"
    }

    const style = {
        color: "red"
    }

    const handleContact = async (e) => {
        e.preventDefault();
        const err = validateForm(name, message, contact)
        if (err) {
            setErrorMessage(err)
        }
    }

    const data = ({name, contact, message })

    useEffect(() =>{
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success: 200', data)
            })
            .catch((error) => {
                console.error('Error: 400', error)
            })
    })

    return (
        <section className="contact">
            <div className="contact-form">
                <div className="contact-title">
                    <Headers title="Skontaktuj się z nami"/>
                </div>
                <form className="contact-form_form" onSubmit={handleContact}>
                    {<alert style={style}>{errorMessage}</alert>}
                    <div className="contact-details">
                        <label className="contact_label">Wpisz swoje imię
                            <input className="contact_input"
                                type="text"
                                placeholder="Krzysztof"
                                 value={name}
                                 onChange={e => setName (e.target.value)}
                            />
                        </label>
                        <label className="contact_label">Wpisz swój email
                            <input className="contact_input"
                                type="text"
                                placeholder="abc@xyz.pl"
                                value={contact}
                                onChange={e => setContact (e.target.value)}
                            />
                        </label>
                    </div>
                    <label className="contact_label">Wpisz swoją wiadomość
                        <input className="textarea"
                            type="textarea"
                            value={message}
                            onChange={e => setMessage (e.target.value)}
                            placeholder="Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat."
                        />
                    </label>
                    <div className="send_input">
                        <input
                            className="send"
                            type="submit"
                            value="Wyślij"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HomeContact;