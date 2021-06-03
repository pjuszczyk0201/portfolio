import React from 'react';
import {Link} from "react-router-dom";
import Menu from "./Menu";
import {useState} from "react";
import Headers from "./Headers";

const Login = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState([])

    const validateLog = () => {
        if(!mail) {
            return "E-mail jest wymagany";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
            return "Zły e-mail"
        }
        if (!pass) {
            return "Hasło jest wymagane"
        } if (pass.length < 6) {
            return "Hasło musi mieć conajmniej 6 znaków"
        }
        return null
    }

    const style = {
        color: "red",
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const err = validateLog(mail, pass)
        if (err) {
            setErrorMsg(err)
        }
    }

    return (
        <section className="login-section">
            <div className="login-menu">
               <Menu/>
            </div>
            <div className="login-form">
                <div className="header-title">
                    <Headers title="Zaloguj się"/>
                </div>
                <div className="form-box">
                    <form className="login-form_form" onSubmit={handleLogin}>
                      <div className="form-box_form">
                          {<alert style={style}>{errorMsg}</alert>}
                            <label className="login_label">Email</label>
                            <input className="login_input"
                                 type="email"
                                 value={mail}
                                 name="email"
                                 onChange={e => setMail (e.target.value)}
                            />
                            <label className="login_label">Hasło</label>
                            <input className="login_input"
                                 type="password"
                                 value={pass}
                                 name="password"
                                 onChange={e => setPass (e.target.value)}
                            />
                      </div>
                       <div className="box-login">
                            <a className="link-login"><Link to="rejestracja" smooth={true}>Załóż konto</Link></a>
                            <input className="input-login"
                                   type="submit"
                                   value="Zaloguj"
                            />
                       </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;