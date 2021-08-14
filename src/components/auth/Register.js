import React, {useCallback, useMemo, useState} from 'react';
import Button from '../common/button/Button'
import s from './Register.module.scss'
import {Cookies} from "react-cookie";
import {AUTH_TOKEN_COOKIE_NAME} from "../../constants";
import {withRouter} from "react-router-dom";
import {compose} from 'redux'
import {connect} from 'react-redux'
import { registerUser } from '../../redux/reducers/auth'

const Register = ({ onToggle, isLoading, registerUser, error, onClose }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [country, setCountry] = useState('')
    const [formError, setFormErr] = useState('')
    const cookie = new Cookies()

    const formValidation = useCallback((data) => {
        if(!data.country){
            return [false, 'Please Select Country']
        }else if(data.password !== data.password2){
            return [false, 'Password does not matched']
        }
        return [true, ''];
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        let data = {
            username,
            email,
            password,
            password2,
            country,
            token: cookie.get(AUTH_TOKEN_COOKIE_NAME)
        }
        if (data['token'] === '') {
            delete data['token']
        }
        const isValidData = formValidation(data);
        if(isValidData[0]){
            setFormErr('')
            registerUser(data)
                .then((data) => {
                    console.log('Data', data);
                   data && data.ok && onClose()
                })
        }else{
            setFormErr(isValidData[1])
        }
    }

    const isError = useMemo(() => {
        if(formError){
            return formError
        }else return null
    }, [formError])

    return (
        <div className={s.registerWrapper}>
            <h2>Create your free account</h2>
            <form className={s.formContainer} onSubmit={onSubmit}>
                <div className={s.formInput}>
                    <input
                        type={'text'}
                        name={'username'}
                        placeholder={'Username'}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={s.formInput}>
                    <input
                        type={'email'}
                        name={'email'}
                        required
                        placeholder={'Email'}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={s.formInput}>
                    <input
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={s.formInput}>
                    <input
                        type={'password'}
                        name={'password2'}
                        required
                        placeholder={'Confirm Password'}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
                <div className={s.formInput}>
                    <select
                        name={'country'}
                        required
                        onChange={(e) => setCountry(e.target.value)}>
                        <option>Country</option>
                        <option>India</option>
                        <option>US</option>
                    </select>
                </div>
                {
                    isError ?
                        <p className={s.error}>{isError}</p> : null
                }
                <div className={s.btnContainer}>
                    <Button
                        label={'Sign Up'}
                        type={'submit'}
                        isLoading={isLoading}
                    />
                </div>
                <p>
                    Already have an account? <span onClick={onToggle}>Log in</span>
                </p>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.errors,
    isLoading: state.loading.isLoading,
    slug: state.auth.slug
})

export default compose(
    connect(mapStateToProps, {registerUser}),
    withRouter
)(Register)
