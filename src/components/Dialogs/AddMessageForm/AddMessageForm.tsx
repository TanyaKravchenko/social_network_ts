import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import React from 'react';
import { NewMessageFormValuesType } from '../Dialogs';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newMessageBody'
                    placeholder='Enter you message'
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);