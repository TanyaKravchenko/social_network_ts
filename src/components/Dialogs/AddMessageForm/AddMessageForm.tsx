import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import React from 'react';
import { NewMessageFormValuesType } from '../Dialogs';

//const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter you message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);