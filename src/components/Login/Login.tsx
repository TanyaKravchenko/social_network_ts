import React, {FormEvent} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

type LoginFormType = {

}

const LoginForm: React.FC<any> = (props)  => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'Login'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'Password'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={'RememberMe'} type={'checkbox'}/>
            </div>
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