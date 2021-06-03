import React, {useState} from 'react';
import Menu from "./Menu";
import Headers from "./Headers";
import {Link} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [error, setError] = useState([]);

    const validate = () => {
        if(!email) {
            return "E-mail jest wymagany";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return "Zły e-mail"
        }
        if (!password) {
            return "Hasło jest wymagane"
        } if (password.length < 6) {
            return "Hasło musi mieć conajmniej 6 znaków"
        }
        if (!passwordRep) {
            return "Powtórz hasło"
        } if (password.length < 6) {
            return "Hasło musi mieć conajmniej 6 znaków"
        }
        if (passwordRep !== password) {
            return "Hasła nie są takie same"
        }
        return null
    }

    const style = {
        color: "red"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validate(email, password, passwordRep)
        if(err) {
            setError(err)
        }
}
    return (
        <section className="login-section">
            <div className="login-menu">
                <Menu/>
            </div>
            <div className="login-form">
                <div className="header-title">
                    <Headers title="Załóż konto"/>
                </div>
                <div className="register-box">
                    <form className="register-form_form" onSubmit={handleSubmit}>
                        <div className="register-form-box">
                            {<alert style={style}>{error}</alert>}
                            <label className="login_label">Email</label>
                            <input className="login_input"
                                type="email"
                                value={email}
                                name="email"
                                onChange={e => setEmail (e.target.value)}
                            />
                            <label className="login_label">Hasło</label>
                            <input className="login_input"
                                type="password"
                                value={password}
                                name="password"
                                onChange={e => setPassword (e.target.value)}
                            />
                            <label className="login_label">Powtórz hasło</label>
                            <input className="login_input"
                                type="password"
                                value={passwordRep}
                                name="passwordRep"
                                onChange={e => setPasswordRep (e.target.value)}
                            />
                        </div>
                        <div className="box-login">
                            <a className="link-login"><Link to="logowanie" smooth={true}>Zaloguj</Link></a>
                            <input className="input-login"
                                   type="submit"
                                   value="Załóż konto"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
