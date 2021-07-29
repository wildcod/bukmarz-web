import React from 'react';
import Button from '../common/button/Button'
import s from './Register.module.scss'

const Register = ({ onToggle }) => {
    return (
        <div className={s.registerWrapper}>
            <h2>Create your free account</h2>
            <form className={s.formContainer}>
                <div className={s.formInput}>
                    <input type={'text'} name={'username'} placeholder={'Username'} />
                </div>
                <div className={s.formInput}>
                    <input type={'email'} name={'email'} placeholder={'Email'} />
                </div>
                <div className={s.formInput}>
                    <input type={'password'} name={'password'} placeholder={'Password'} />
                </div>
                <div className={s.formInput}>
                    <input type={'password'} name={'password2'} placeholder={'Confirm Password'} />
                </div>
                <div className={s.formInput}>
                    <select name={'country'}>
                        <option>Country</option>
                        <option>India</option>
                        <option>US</option>
                    </select>
                </div>
                <div className={s.btnContainer}>
                    <Button label={'Sign Up'}/>
                </div>
                <p>
                    Already have an account? <span onClick={onToggle}>Log in</span>
                </p>
            </form>
        </div>
    );
};

export default Register;