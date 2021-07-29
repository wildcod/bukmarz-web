import React from 'react';
import s from './Register.module.scss'
import Button from "../common/button/Button";

const Login = ({ onToggle }) => {
    return (
        <div className={s.registerWrapper}>
           <h2>Login</h2>
           <form className={s.formContainer}>
                <div className={s.formInput}>
                    <input type={'text'} name={'username'} placeholder={'Username'} />
                </div>
                <div className={s.formInput}>
                    <input type={'password'} name={'password'} placeholder={'Password'} />
                </div>
                <div className={s.btnContainer}>
                    <Button label={'Login'}/>
                </div>
                <p>
                    Don't have an account? <span onClick={onToggle}>Sign Up</span>
                </p>
            </form>
        </div>
    );
};

export default Login;