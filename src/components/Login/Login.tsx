import React, {FormEvent} from 'react';
import {reduxForm, Field} from 'redux-form';

type LoginFormType = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const LoginForm = (props: LoginFormType)  => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'Login'} component={'input'}/></div>
            <div><Field placeholder={'Password'} name={'Password'} component={'input'}/></div>
            <div><Field component={'input'} name={'Remember'} type={'checkbox'}/></div>
            remember me
            <div>
                <button>Login</button>
            </div>
        </form>)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;