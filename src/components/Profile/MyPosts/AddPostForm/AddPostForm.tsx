import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import React from 'react';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormsControls/FormsControls';

type PropsType = {}
export type AddPostFormValuesType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10);

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm<AddPostFormValuesType, PropsType>({form: 'ProfileAddNewPostForm'})(AddPostForm)