import React, {useState} from 'react';
import s from './Register.module.scss'
import Button from "../common/button/Button";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {loginUser} from '../../redux/reducers/auth'
import { useHistory } from "react-router-dom";

const Login = ({ onToggle, isLoading, loginUser, onClose, error }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const onSubmit = (e) => {
        console.log('CLICK')
        e.preventDefault()
        loginUser({
            username, password
        }).then(() => {
            onClose()
            history.push('/dashboard')
        })
    }

    return (
        <div className={s.registerWrapper}>
           <h2>Login</h2>
           <form className={s.formContainer} onSubmit={onSubmit}>
                <div className={s.formInput}>
                    <input
                        type={'text'}
                        required
                        name={'username'}
                        placeholder={'Username'}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={s.formInput}>
                    <input
                        type={'password'}
                        required
                        name={'password'}
                        placeholder={'Password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={s.btnContainer}>
                    <Button
                        label={'Login'}
                        type={'submit'}
                        isLoading={isLoading}
                    />
                </div>
                <p>
                    Don't have an account? <span onClick={onToggle}>Sign Up</span>
                </p>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.loading.isLoading,
    error: state.errors,
    slug: state.auth.slug
})

export default compose(
    connect(mapStateToProps, {loginUser}),
    withRouter
)(Login)
